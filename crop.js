const sharp = require('sharp');
const fs = require('fs');

async function cropImage() {
  try {
    const inputPath = 'C:/Users/BORAINE TECH/Downloads/lenlogo.png';
    const outputPath = 'C:/Users/BORAINE TECH/Downloads/oncologywebsite/public/lenlogo.png';
    
    // Trim crops transparent or white background automatically
    await sharp(inputPath)
      .trim()
      .toFile(outputPath);
      
    console.log('Image cropped and saved successfully.');
  } catch (err) {
    console.error('Error cropping image:', err);
  }
}

cropImage();
