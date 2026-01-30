const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

const recursosDir = path.join(__dirname, '../Recursos'); // Adjusting path to be sibling of Landing-page-Metas based on my finding usually, but wait, previous finding was that Recursos is IN Landing-page-Metas.
// Step 160: Landing-page-Metas\Recursos\VSL.mp4.
// So path should be path.join(__dirname, '../Recursos'); if scripts is in Landing-page-Metas/scripts.
const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');

if (!fs.existsSync(imagesDir)) {
    console.log(`Creating directory: ${imagesDir}`);
    fs.mkdirSync(imagesDir, { recursive: true });
}

const filesToProcess = [
    { name: 'LOGO1.png', type: 'png', output: 'LOGO1.png' },
    { name: 'LOGO2.png', type: 'png', output: 'LOGO2.png' },
    { name: 'CAJA.png', type: 'png', output: 'CAJA.png' },
    { name: 'Alejo.svg', type: 'svg', output: 'Alejo.svg' }
];

async function processFiles() {
    console.log('Starting image optimization...');

    for (const file of filesToProcess) {
        const inputPath = path.join(recursosDir, file.name);
        const outputPath = path.join(imagesDir, file.output);

        if (!fs.existsSync(inputPath)) {
            console.error(`Input file not found: ${inputPath}`);
            continue;
        }

        console.log(`Processing ${file.name}...`);

        try {
            if (file.type === 'png') {
                await sharp(inputPath)
                    .png({ quality: 80, compressionLevel: 9 })
                    .toFile(outputPath);
                console.log(`Saved optimized PNG to ${outputPath}`);
            } else if (file.type === 'svg') {
                const svgData = fs.readFileSync(inputPath, 'utf8');
                const result = optimize(svgData, {
                    path: inputPath,
                    multipass: true, // Enable multipass optimization
                    plugins: [
                        'preset-default',
                        'removeDimensions',
                        // Add more plugins if needed for aggressive optimization of 4MB file
                        {
                            name: 'cleanupNumericValues',
                            params: {
                                floatPrecision: 2
                            }
                        }
                    ]
                });
                fs.writeFileSync(outputPath, result.data);
                console.log(`Saved optimized SVG to ${outputPath}`);
            }
        } catch (err) {
            console.error(`Error processing ${file.name}:`, err);
        }
    }
}

processFiles();
