var blogPosts = [
    {
        id: 1, 
        title: 'First blog post', 
        content: 'First blog post content'
    }, 
    {
        id: 2, 
        title: 'First blog post', 
        content: 'First blog post content'
    }
]

var result = []; 
result.posts = document.querySelector('.blogposts-items');
    
var fetchPosts = () => {
    result.posts.innerHTML = ''; 
    
    blogPosts.forEach(blogPost => {
        createDomElements(blogPost); 
        result.posts.appendChild(result.li); 
    })
}

// Create DOM Elements step
var createDomElements = (blogPost) => {
    let post = document.createElement('div'); 
    post.classList.add('blogPost'); 
    
    let title = document.createElement('h2'); 
    let content = document.createElement('h3'); 
    title.innerHTML = blogPost.title; 
    content.innerHTML = blogPost.content; 

    post.appendChild(title); 
    post.appendChild(content); 

    result.li = document.createElement('li'); 
    result.li.appendChild(post); 
}

fetchPosts(); 