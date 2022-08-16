import { Generate437 } from './src/font.js'

const args = process.argv.slice(2)
if (args[0]) {
    console.log('Generating 437 font file and saving to', args[0])
    Generate437(args[0])
} else {
    console.log('No output filename passed.')
}
