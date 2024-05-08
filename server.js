function getRepositories() {
    const username = document.getElementById('username').value;
    const apiUrl = `https://api.github.com/users/${Lalasa12}/repos`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const repositories = data.map(repo => `
                <li class="repository">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </li>
            `).join('');
            document.getElementById('repositories').innerHTML = repositories;
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
        });
}
