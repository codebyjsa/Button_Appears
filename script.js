function but() {
    // Call the first API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            console.log('First API Data:', data);
            // Show the second button after successful API call
            document.getElementById('sec_but').style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
}

function but2() {
    // Call the second API
    fetch('https://jsonplaceholder.typicode.com/posts/2')
        .then(response => response.json())
        .then(data => {
            console.log('Second API Data:', data);
            // Show the third button after successful API call
            document.getElementById('third_but').style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
}

function but3() {
    // Call the third API
    fetch('https://jsonplaceholder.typicode.com/posts/3')
        .then(response => response.json())
        .then(data => {
            console.log('Third API Data:', data);
            // Perform any additional actions if needed
        })
        .catch(error => console.error('Error:', error));
}
