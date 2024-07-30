document.getElementById('runCode').addEventListener('click', () => {
    const htmlCode = document.getElementById('html').value;
    const cssCode = `<style>${document.getElementById('css').value}</style>`;
    const jsCode = `<script>${document.getElementById('js').value}<\/script>`;
    
    const outputFrame = document.getElementById('output');
    const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;
    outputDocument.open();
    outputDocument.write(htmlCode + cssCode + jsCode);
    outputDocument.close();
});
