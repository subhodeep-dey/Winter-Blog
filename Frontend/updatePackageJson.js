// updatePackageJson.js
const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Read package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Update the proxy field
packageJson.proxy = process.env.REACT_APP_PROXY;

// Write the updated package.json back to the file system
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log('package.json updated successfully');