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
    fetch(url)
        .then(response => {
            const status = response.ok ? 'Website is reachable' : 'Website is not reachable';
            document.getElementById('result').innerText = `${status}\nStatus Code: ${response.status}`;
        })
        .catch(() => {
            document.getElementById('result').innerText = 'Error checking website';
        });
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
