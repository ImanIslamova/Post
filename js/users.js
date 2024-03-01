
const usersContainer = document.querySelector('.users')

let data = fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((res) => renderUser(res))

const renderUser = (users) =>{
    for(let user of users){
        const div = document.createElement('div')
        div.classList.add('card')
        const tag = document.createElement('div')
        tag.classList.add('card-body')
        const cardTitle = document.createElement('h3')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = user.name 
        tag.append(cardTitle)
        const cardText1 = document.createElement('p')
        cardText1.classList.add('card-text')
        cardText1.innerText = user.username
        tag.append(cardText1)
        const cardText2 = document.createElement('p')
        cardText2.classList.add('card-text')
        cardText2.innerText = user.email
        tag.append(cardText2)
        const cardText3 = document.createElement('p')
        cardText3.classList.add('card-text')
        cardText3.innerText = user.phone
        tag.append(cardText3)
        const cardText4 = document.createElement('p')
        cardText4.classList.add('card-text')
        cardText4.innerText = user.website
        tag.append(cardText4)
        tag.innerHTML += `<a href="user.html" class="btn btn-outline-success">Перейти на страницу пользователя</a>`
        div.append(tag)
        usersContainer.append(div)

    }
}

