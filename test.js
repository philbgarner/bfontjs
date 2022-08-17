const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const { LoadFromFile, DrawText } = require('./lib/bfontjs.js')

const width = 256;
const height = 256;

const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");

context.fillStyle = "#00c";
context.fillRect(0, 0, width, height);

LoadFromFile('./lib/fonts/default.json').then((font) => {
    DrawText(context, font, 10, 10, "Test.", "#ffffffff")

    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./testImage.png", buffer);
})

