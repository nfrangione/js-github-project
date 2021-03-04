const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('search').value;
    findUser(name);
})

function findUser(userName) {
    fetch(`https://api.github.com/search/users?q=${userName}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.items);
        successfulReturn(data.items)
    })
    .catch(error => console.log(error))
}

function successfulReturn(returnedUsers) {
    const userList = document.querySelector('#user-list')
    returnedUsers.forEach(user => {
        let newUser = document.createElement('li');
        let username = document.createElement('h2');
        let img = document.createElement('img');
        let link = document.createElement('a');
        username.innerText = user.login;
        img.src = user.avatar_url;
        link.href = user.html_url;
        console.log(link);
        link.innerText = '\nLink To My Account'
        newUser.appendChild(username);
        newUser.appendChild(img);
        newUser.appendChild(link);
        userList.appendChild(newUser);
    })
}