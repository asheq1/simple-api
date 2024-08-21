function loadPosts(){
    const url = `https://jsonplaceholder.typicode.com/posts`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts){
    const container = document.getElementById('container')
    for(const post of posts){
        // console.log(post)
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
            <h2>User Id- ${post.id}</h2>
            <h3>Title: ${post.title}</h3>
            <p>Description ${post.body}</p>
        `
        container.appendChild(div)
    }

}

loadPosts()