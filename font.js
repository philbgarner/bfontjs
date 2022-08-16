import fs from 'fs'

let fonts = {
    
}

let canvas = null

function base64(file) {
    return Buffer.from(fs.readFileSync(file)).toString('base64')
}

function hexToRgb(hex) {
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

function rgbToHex(rgb) {
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
    Codepage437toJSON('./fonts/Codepage-437.png').then((data) => {
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
                }
                
                sy += ch
                if (sy >= 128) {
                    sy = 0
                }
            }

            resolve({codepage: codepage, imagedata: imagedata})
        }
        catch (e) {
            reject(e)
        }
    })
}

function isNumber(char) {
    if (typeof char !== 'string') {
      return false
    }
  
    if (char.trim() === '') {
      return false
    }
  
    return !isNaN(char)
}

function DrawText(ctx, font, x, y, text, colour) {
    if (!fonts[font]) {
        return
    }

    if (!fonts[font].imagedata) {
        LoadFont(font)
    }

    if (!canvas) {
        canvas = document.createElement('canvas')
    }
    let fwidth = 128
    let fontctx = canvas.getContext('2d')
    fontctx.clearRect(0, 0, fwidth, fwidth)
    text = text.toUpperCase()
    
    let dx = 0
    for (let t in text) {
        let codeoffset = isNumber(text[t]) ? 48 : 65
        let code = text[t].charCodeAt(0) - codeoffset
        let sourceoffset = isNumber(text[t]) ? code * 4 + 104 : code * 4
        if (`!"#$%&'()*+,-./`.includes(text[t])) {
            code = text[t].charCodeAt(0) - 33
            sourceoffset = code * 4 + 36 * 4
        }
        fontctx.drawImage(fonts[font].imagedata, sourceoffset, 0, 4, 5, dx, 0, 4, 5)
        dx += 4
    }
    var imageData = fontctx.getImageData(0, 0, 4 * text.length, 5)
    var pixels = imageData.data
    var i

    let colr = utility.hexToRgb(colour)

    for (i = 0; i < pixels.length; i += 4) {
        if (pixels[i] > 0) {
            pixels[i] = colr.r
            pixels[i + 1] = colr.g
            pixels[i + 2] = colr.b
            pixels[i + 3] = colr.a
        }
    }
    
    fontctx.clearRect(0, 0, fwidth, fwidth)
    fontctx.putImageData(imageData, 0, 0)
    ctx.drawImage(canvas, 0, 0, text.length * 4, 5, x, y, text.length * 4, 5)
}

function LoadFont(font) {
    if (!fonts[font]) {
        return
    }

    fonts[font].imagedata = new Image()
    fonts[font].imagedata.src = './images/' + fonts[font].filename
}

export { DrawText, LoadFont, Generate437 }