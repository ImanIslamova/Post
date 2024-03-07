
const userId = window.location.search.substring(4)
const containerUser = document.querySelector('.container-m-top')
const postsContainer = document.querySelector('.user')

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .then((res) => renderUser(res))

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => res.json())
    .then((res) => renderPost(res))

    const renderUser = (user) =>{
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
        div.append(tag)
        containerUser.append(div)
    
    }
    
    



const renderPost = (posts) => {
    for (let post of posts)  {
        const div1 = document.createElement('div')
        div1.classList.add('col')
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
        div3.innerHTML += `<a href="comments.html?id=${post.id}" class="btn btn-primary">Открыть пост</a>`
        div1.append(div2)
        postsContainer.append(div1)
    }
}