/**
 * @author Kevin Cioffi
 * 11/28/2023
 */

const jokeButton = document.querySelector('button');

function getJoke() {
    const request = new XMLHttpRequest();

    request.open('GET', 'https://api.chucknorris.io/jokes/random?category=dev');

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            let joke = JSON.parse(request.responseText);
            document.getElementById('joke').textContent = joke.value;
        }
    };
    request.send();
}

jokeButton.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);

