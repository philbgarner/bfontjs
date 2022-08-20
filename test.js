import fs from 'fs'
import { createCanvas, loadImage } from 'canvas'
import { LoadFromFile, DrawText } from './src/bfontjs.js'

const width = 256;
const height = 256;

const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

context.fillStyle = '#00c';
context.fillRect(0, 0, width, height);

LoadFromFile('./src/fonts/default.json').then((font) => {
    const args = process.argv.slice(2)
    let testText = 'ABCDEFGHIJKLabcdefghijkl'
    if (args[0]) {
        testText = args[0]
    }
    
    DrawText(context, font, 10, 10, testText, '#ffffffff')

    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync('./testImage.png', buffer)
})