const container = document.querySelector('.card-body'); // Select the element with class "card-body"
const url = "https://jsonplaceholder.typicode.com/comments";

function createCard(comment) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');

    card.innerHTML = `
        <div class="card-body">
            
            <h5 class="card-title mb-2 text-muted">ID: ${comment.id}</h5>
            <h6 class="card-subtitle">Post ID: ${comment.postId}</h6>
            <p class="card-text">Name: ${comment.name}</p>
            <p class="card-text">Email: ${comment.email}</p>
            <p class="card-text">Body: ${comment.body}</p>
        </div>
    `;

    return card;
}

function fetchdata() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Clear any existing content in the container
            container.innerHTML = '';

            data.forEach(comment => {
                const card = createCard(comment);
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error:', error));
}

fetchdata();
