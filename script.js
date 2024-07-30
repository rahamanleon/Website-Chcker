document.getElementById('runButton').addEventListener('click', function() {
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = `<style>${document.getElementById('cssCode').value}</style>`;
    const jsCode = `<script>${document.getElementById('jsCode').value}<\/script>`;
    
    const output = document.getElementById('output');
    output.srcdoc = `${htmlCode}${cssCode}${jsCode}`;
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = document.getElementById('cssCode').value;
    const jsCode = document.getElementById('jsCode').value;
    
    const content = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Website Checker</title>
        <style>${cssCode}</style>
    </head>
    <body>
        ${htmlCode}
        <script>${jsCode}<\/script>
    </body>
    </html>
    `;
    
    downloadFile('website.html', content);
});

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
