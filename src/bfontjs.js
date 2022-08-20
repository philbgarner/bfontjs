import { createCanvas, Image } from 'canvas'
import fs from 'fs'
import { URL } from 'url'

let canvasEl = null

function base64(file) {
    return Buffer.from(fs.readFileSync(file)).toString('base64')
}

function HexToRgba(hex) {
    if (hex.length === 7) {
        hex += 'ff'
    } else if (hex.length === 8) {
        hex += '0'
    }
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: parseInt(result[4], 16)
    } : null;
  }

function RgbaToHex(rgb) {
    let r = parseInt(rgb.r).toString(16)
    let g = parseInt(rgb.g).toString(16)
    let b = parseInt(rgb.b).toString(16)
    let a = parseInt(rgb.a).toString(16)
    
    r = r.length === 1 ? '0' + r : r
    g = g.length === 1 ? '0' + g : g
    b = b.length === 1 ? '0' + b : b
    a = a.length === 1 ? '0' + a : a
    return `#${r}${g}${b}${a}`
}

function Generate437(fileOut) {
    const __dirname = new URL('.', import.meta.url).pathname.slice(1)
    Codepage437toJSON(__dirname + '/fonts/Codepage-437.png').then((data) => {
        fs.writeFileSync(fileOut, JSON.stringify(data))
    })
}

function Codepage437toJSON(bitmapFilename) {
    return new Promise((resolve, reject) => {
        try {
            let sx = 0      // Source X
            let sy = 0      // Source Y
            let cw = 9      // Character Width
            let ch = 16     // Character Height

            let codepage = {}
            let imagedata = base64(bitmapFilename)
        
            for (let code = 0; code < 256; code++) {
                codepage[String.fromCharCode(code)] = { x: sx, y: sy, w: cw, h: ch }

                sx += cw
                if (sx >= 288) {
                    sx = 0
                    sy += ch
                }
                
                if (sy >= 128) {
                    sy = 0
                }
            }

            resolve({cwidth: cw, cheight: ch, codepage: codepage, imagedata: imagedata})
        }
        catch (e) {
            reject(e)
        }
    })
}

function DrawText(ctx, font, x, y, text, colour) {
    if (!font || !font.codepage || !font.imagedata || !font.image || !font.cwidth || !font.cheight) {
        throw new Error('Invalid font or font not loaded.')
    }

    let textwidth = font.cwidth * text.length
    let textheight = font.cheight

    if (!canvasEl) {
        try {
            canvasEl = document.createElement('canvas')
        } catch {
            canvasEl = createCanvas(textwidth, textheight)
        }
    }
    let fontctx = canvasEl.getContext('2d')
    fontctx.clearRect(0, 0, textwidth, textheight)
    
    let dx = 0
    for (let t in text) {
        var rect = font.codepage[text[t]]
        if (rect) {
            fontctx.drawImage(font.image, rect.x, rect.y, rect.w, rect.h, dx, 0, rect.w, rect.h)
            dx += rect.w
        } else {
            console.log('Error finding value in codepage for', text[t], `(${text[t].charCodeAt(0)})`)
            return
        }
    }
    var imageData = fontctx.getImageData(0, 0, dx, rect.h)
    var pixels = imageData.data
    var i

    let colr = HexToRgba(colour)

    for (i = 0; i < pixels.length; i += 4) {
        if (pixels[i] > 0) {
            pixels[i] = colr.r
            pixels[i + 1] = colr.g
            pixels[i + 2] = colr.b
            pixels[i + 3] = colr.a
        }
    }
    
    fontctx.clearRect(0, 0, textwidth, textheight)
    fontctx.putImageData(imageData, 0, 0)
    ctx.drawImage(canvasEl, 0, 0, text.length * rect.w, rect.h, x, y, text.length * rect.w, rect.h)
}

function LoadFromJSON(font) {
    return new Promise((resolve, reject) => {
        try {
            if (typeof font === 'string') {
                font = JSON.parse(font)
            }
            font.image = new Image()
            font.image.src = 'data:image/png;base64,' + font.imagedata
            resolve(font)
        } catch (e) {
            reject(e)
        }
    })
}

function LoadFromFile(filename) {
    return new Promise((resolve, reject) => {
        try {
            let data = fs.readFileSync(filename).toString()
            LoadFromJSON(data).then((font) => {
                resolve(font)
            })
        } catch (e) {
            reject(e)
        }
    })
}

export { DrawText, LoadFromJSON, LoadFromFile, Generate437 }