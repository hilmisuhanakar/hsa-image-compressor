# HSA Image Compressor

A command-line tool for image compression. This utility reads images from a specified directory and saves the compressed versions to another specified directory. It uses the `sharp` library to support JPEG and PNG formats.

## Features

- Reads images from the input directory.
- Saves compressed images to the specified output directory.
- Supports JPEG and PNG formats.
- User-configurable image quality.

## Installation

To install the project globally, use the following command:

## bash

npm install -g hsa-image-compressor

## Usage

hsa-image-compressor -i <input_directory> -o <output_directory> [-q <quality>]

## Parameters

 <ul>
    <li>
      -i, --input <dir>: The input directory containing images to be compressed.
    </li>
    <li>
     -o, --output <dir>: The output directory where compressed images will be saved. If not specified, an output_optimized folder will be created in the current directory.
    </li>
    <li>
      -q, --quality <number>: Image quality (0-100). The default value is 80.
    </li>
 </ul>

# Licence

hsa-image-compressor is an open source project that is licensed under the MIT license.
