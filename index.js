document.getElementById('new-blog').addEventListener('submit', function(e){
    e.preventDefault()
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: 'POST',
    body: JSON.stringify({
       title: 'new blog',
       constent: false
    }),
    headers: {
        'content-type': 'application/json'
    }
})
.then(res => res.json())
.then(data => console.log(data))
})