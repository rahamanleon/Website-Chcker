document.getElementById('runButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    if (url) {
        checkWebsite(url);
    } else {
        alert('Please enter a URL');
    }
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const result = document.getElementById('result').innerText;
    if (result) {
        downloadFile('result.txt', result);
    } else {
        alert('No result to download');
    }
});

function checkWebsite(url) {
    Promise.all([
        fetch(url),
        fetch(url + '/styles.css'),
        fetch(url + '/script.js')
    ]).then(responses => {
        const status = responses.map(response => ({
            url: response.url,
            status: response.ok ? 'reachable' : 'not reachable',
            statusCode: response.status
        }));
        displayResults(status);
    }).catch(error => {
        document.getElementById('result').innerText = 'Error checking website';
    });
}

function displayResults(results) {
    let resultText = results.map(result => `${result.url} is ${result.status} (Status Code: ${result.statusCode})`).join('\n');
    document.getElementById('result').innerText = resultText;
}

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
