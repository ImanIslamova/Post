const searchText = window.location.search.substring(8).replaceAll('%20', ' ').toUpperCase()
const searchContainer = document.querySelector('.search-container_post')

fetch(`https://jsonplaceholder.typicode.com/posts?title=${searchText.toLowerCase()}`)
    .then((res) => res.json())
    .then((res) => renderResuitPosts(res))


const renderResuitPosts = (posts) =>{
    for(let post of posts){
        const div = document.createElement('div')
        div.classList.add('col')
        const div2 = document.createElement('div')
        div2.classList.add('card')
        const div3 = document.createElement('div')
        div3.classList.add('card-body')
        div2.append(div3)
        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = post.title
        div3.append(cardTitle)
        const cardText = document.createElement('p')
        cardText.classList.add('card-text')
        cardText.innerText = post.body
        div3.append(cardText)
        div.append(div2)
        searchContainer.append(div)
    }
}


const searchTextUsers = window.location.search.substring(8)
const searchContainerUser = document.querySelector('.search-container_user')

fetch(`https://jsonplaceholder.typicode.com/users?username=${searchTextUsers}`)
    .then((res) => res.json())
    .then((res) => renderResultUser(res))

const renderResultUser = (users) => {
    for (let user of users)  {
        const div = document.createElement('div')
        div.classList.add('card')
        const tag = document.createElement('div')
        tag.classList.add('card-body')
        const cardTitle = document.createElement('h5')
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
        tag.innerHTML += `<a href="user.html?id=${user.id}" class="btn btn-outline-success">Перейти на страницу пользователя</a>`
        div.append(tag)
        searchContainerUser.append(div)
    }
}
