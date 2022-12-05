
   
   const blogArray = []

    function blogArry() {
        let html = ''
        for(let blog of blogArray){
            html += `
            <h3>${blog.title}</h3>
            <p>${blog.body}</p><hr/>
            `
        }
        
        document.getElementById("articles").innHTML = html
    }

document.getElementById('new-blog').addEventListener('submit', function(e){
    e.preventDefault()
    const title = document.getElementById('blog-title').value
    const body = document.getElementById('blog-body').value

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: 'POST',
    body: JSON.stringify({
       title: title,
       constent: body
    }),
    headers: {
        'content-type': 'application/json'
    }
})
.then(res => res.json())
.then(data => {
 
    blogArray.unshift(data)
    blogArry()

    // document.getElementById("articles").innHTML = data.slice(0,5)
})
})