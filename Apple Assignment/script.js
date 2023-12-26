

document.querySelector('.icon-inside').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')

        .then(response => response.json())
        .then(data => {
            alert('Button clicked! Data from API: ' + JSON.stringify(data));
        })
        .catch(error => {
            console.error('Error:', error);
        });
});


