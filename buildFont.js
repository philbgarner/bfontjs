const { Generate437 } = require('./lib/bfontjs.js')

const args = process.argv.slice(2)
if (args[0]) {
    console.log('Generating 437 font file and saving to', args[0])
    Generate437(__dirname + '/lib/fonts/' + args[0])
} else {
    console.log('No output filename passed.')
}
