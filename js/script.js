
const postsContainer = document.querySelector('.row')

let data = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((res) => renderPost(res))

const renderPost = (posts) =>{
    for(let post of posts){
        const tag = `<div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">
                    ${post.body}  
                    </p>
                    <a href="#" class="btn btn-outline-success">Открыть пост</a>
                </div>
            </div>
        </div>`
        postsContainer.innerHTML += tag
    }
}





