document.addEventListener("DOMContentLoaded", () => {
    const url = 'https://veztware.github.io'; // Replace with the URL you want to fetch text from
    const textContainer = document.getElementById('text-container');

    fetch(url)
        .then(response => response.text())
        .then(data => {
            textContainer.textContent = data;
        })
        .catch(error => {
            console.error('Error fetching text:', error);
        });
});
