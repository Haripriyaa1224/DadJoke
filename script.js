function getDadJoke() {
    // Make a request to the dad joke API
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Display the joke in the HTML
        const jokeDisplay = document.getElementById('jokeDisplay');
        jokeDisplay.textContent = data.joke;
    })
    .catch(error => {
        console.error('Error fetching dad joke:', error);
    });
}
