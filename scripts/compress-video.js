const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

console.log('Starting video compression...');

// Set ffmpeg path
ffmpeg.setFfmpegPath(ffmpegPath);

const inputFile = path.join(__dirname, '../Recursos/VSL.mp4');
const outputDir = path.join(__dirname, '../public/videos');
const outputFile = path.join(outputDir, 'vsl-compressed.mp4');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Check if input file exists
if (!fs.existsSync(inputFile)) {
    console.error(`Input file not found: ${inputFile}`);
    process.exit(1);
}

ffmpeg(inputFile)
    .videoCodec('libx264')
    .audioCodec('aac')
    .outputOptions([
        '-crf 28',        // Compression factor (18-28 is good range, higher = more compression)
        '-preset faster', // Encoding speed
        '-movflags +faststart' // Optimize for web streaming
    ])
    .on('end', () => {
        console.log('Video compression finished successfully!');
        console.log(`Saved to: ${outputFile}`);
    })
    .on('error', (err) => {
        console.error('Error during compression:', err);
        process.exit(1);
    })
    .save(outputFile);
