
const usersContainer = document.querySelector('.row')

let data = fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((res) => renderUser(res))

const renderUser = (users) =>{
    for(let user of users){
        const tag = `<div class="wrap_style">
        <div class="card">
            <div class="card-body">
              <h3 class="card-title">${user.name}</h3>
              <p class="card-text">${user.username}</p>
              <p class="card-text">${user.email}</p>
              <p class="card-text">${user.phone}</p>
              <p class="card-text">${user.address.city}</p>
              <p class="card-text">${user.website}</p>
              <a href="#" class="btn btn-outline-success">Перейти на страницу пользователя</a>
            </div>
        </div>
    </div>`
        usersContainer.innerHTML += tag
    }
}

