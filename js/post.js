
const postId = window.location.search.substring(4)
const postContainer = document.querySelector('.post-container')
const commentsContainer = document.querySelector('.comments')


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => res.json())
    .then((res) => renderPost(res))

fetch(`https://jsonplaceholder.typicode.com/coments?postId=${postId}`)
    .then((res) => res.json())
    .then((res) => renderComments(res))


const getUserName = (userId) =>{
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => res.json())
        .then((res) => res)

}

const renderPost = async (data) =>{
    const div = document.createElement('div')
    div.classList.add('card-body')
    const h2 = document.createElement('h2')
    h2.classList.add('card-title')
    h2.innerText = data.title
    div.append(h2)
    const p = document.createElement('p')
    p.classList.add('card-text')
    p.innerText = data.body
    div.append(p)
    const user = await getUserName(data.userId)
    const h5 = document.createElement('h5')
    h5.classList.add('card-title-two')
    h5.innerText = `Author:${user.username}`
    div.append(h5)
    postContainer.append(div)
}

const renderComments = (comments) =>{
    for(let comment of comments){
        const div = document.createElement('div')
        div.classList.add('card')
        const h5 = document.createElement('h5')
        h5.classList.add('card-header')
        div.append(h5)
        const div2 = document.createElement('div')
        div2.classList.add('card-body')
        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = comment.name
        div2.append(cardTitle)
        const p = document.createElement('p')
        p.classList.add('card-text')
        p.innerText = comment.body
        div2.append(p)
        div.append(div2)
        commentsContainer.append(div)
    }
}


