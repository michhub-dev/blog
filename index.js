
   
   let blogArray = []

    function blogArry() {
        let html = ''
        for(let blog of blogArray){
            html += `
            <h3>${blog.title}</h3>
            <p>${blog.body}</p><hr/>
            `
        }
        
        document.getElementById("articles").innerHTML = html
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts")
       .then(res => res.json())
       .then(data => {
          console.log(data, "before submit")
        blogArray = data.slice(0, 5)
        blogArry()
       })

document.getElementById('new-blog').addEventListener('submit', function(e){
    e.preventDefault()
    const title = document.getElementById('blog-title').value
    const body = document.getElementById('blog-body').value

    const data = {
        title: title,
        body: body
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(res => res.json())
.then(data => {
    console.log(data, 'after submit')
    blogArray.unshift(data)
    blogArry()

})
})