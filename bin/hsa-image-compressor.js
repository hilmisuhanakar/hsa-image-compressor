#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { Command } = require("commander");

const program = new Command();

program
  .version("1.0.3")
  .option("-i, --input <dir>", "Input directory")
  .option("-o, --output <dir>", "Output directory")
  .option("-q, --quality <number>", "Image quality (0-100)", 80);

program.parse(process.argv);

const options = program.opts();
const input = options.input || process.cwd(); // Use current directory if no input is provided
const output = options.output || path.join(process.cwd(), 'output_optimized'); // Default output directory

// Create output directory if it doesn't exist
if (!fs.existsSync(output)) {
  fs.mkdirSync(output, { recursive: true });
}

fs.readdir(input, (err, files) => {
  if (err) {
    console.error("Unable to read the directory:", err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(input, file);
    const outputFilePath = path.join(output, file);
    const extname = path.extname(file).toLowerCase();

    let sharpInstance = sharp(filePath);

    if (extname === ".jpeg" || extname === ".jpg") {
      sharpInstance.jpeg({ quality: parseInt(options.quality) });
    } else if (extname === ".png") {
      sharpInstance.png({ quality: parseInt(options.quality) });
    } else {
      console.error(`Unsupported file format: ${file}`);
      return;
    }

    sharpInstance.toFile(outputFilePath, (err, info) => {
      if (err) {
        console.error("Error occurred while processing the image:", err);
      } else {
        console.log(`Processed: ${file} - New Size: ${info.size} bytes`);
      }
    });
  });
});
