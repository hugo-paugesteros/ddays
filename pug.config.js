const fs = require('fs');
const schedule = JSON.parse(fs.readFileSync('programme.json', 'utf8'));
exports.schedule = schedule