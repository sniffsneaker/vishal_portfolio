const fs = require('fs');
const { PdfReader } = require('pdfreader');

const pdfPath = process.argv[2] || 'c:\\Users\\VISHAL\\Downloads\\resume_amazon.pdf';

new PdfReader().parseFileItems(pdfPath, (err, item) => {
    if (err) {
        console.error('Error:', err);
    } else if (!item) {
        // End of file
    } else if (item.text) {
        console.log(item.text);
    }
});
