const utility = require('./utility')

let fonts = {
    Tiny: {
        filename: "tinyfont.png",
        imagedata: null,
    }
}

let canvas = null

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

module.exports = { DrawText, LoadFont }