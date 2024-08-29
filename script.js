function displayData(data) {
    // Convert the data object to a JSON string and display it
    document.getElementById('api_response').innerHTML += `
        <div style="border: 1px solid white; margin-top: 10px; padding: 10px;">
            <strong>Title:</strong> ${data.title}<br>
            <strong>Body:</strong> ${data.body}
        </div>`;
}

function but() {
    // Call the first API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            console.log('First API Data:', data);
            displayData(data);  // Display the actual data on the page
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
            displayData(data);  // Display the actual data on the page
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
            displayData(data);  // Display the actual data on the page
        })
        .catch(error => console.error('Error:', error));
}
