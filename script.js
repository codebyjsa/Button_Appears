function displayMessage(message) {
    document.getElementById('api_response').innerHTML += `<p>${message}</p>`;
}

function but() {
    // Call the first API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            console.log('First API Data:', data);
            displayMessage('First API called successfully!');
            // Show the second button after successful API call
            document.getElementById('sec_but').style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error);
            displayMessage('First API call failed.');
        });
}

function but2() {
    // Call the second API
    fetch('https://jsonplaceholder.typicode.com/posts/2')
        .then(response => response.json())
        .then(data => {
            console.log('Second API Data:', data);
            displayMessage('Second API called successfully!');
            // Show the third button after successful API call
            document.getElementById('third_but').style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error);
            displayMessage('Second API call failed.');
        });
}

function but3() {
    // Call the third API
    fetch('https://jsonplaceholder.typicode.com/posts/3')
        .then(response => response.json())
        .then(data => {
            console.log('Third API Data:', data);
            displayMessage('Third API called successfully!');
            // Perform any additional actions if needed
        })
        .catch(error => {
            console.error('Error:', error);
            displayMessage('Third API call failed.');
        });
}
