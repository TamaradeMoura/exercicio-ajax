document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector("#name");
    const usernameElement = document.querySelector("#username");
    const avatarElement = document.querySelector("#avatar");
    const reposElement = document.querySelector("#repos");
    const followersElement = document.querySelector("#followers");
    const followingElement = document.querySelector("#following");
    const linkElement = document.querySelector("#link");

    fetch('https://api.github.com/users/TamaradeMoura')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        })
        .catch(function(erro) {
            alert("Ops, ocorreu um erro ao tentar carregar a página, tente novamente em alguns minutos.");
        })
})