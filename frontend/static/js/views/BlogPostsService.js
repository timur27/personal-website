export var setupBlogPostsService = () => {

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
    
    var ID = function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    
    var result = []; 
    result.posts = document.querySelector('.blogposts-items');
    document.onload = () => {
        console.log('hey timka'); 
    }
    var fetchPosts = () => {
        result.posts.innerHTML = ''; 
        
        blogPosts.forEach(blogPost => {
            createDomElements(blogPost); 
            result.posts.appendChild(result.li); 
        })
    }
    
    document.addEventListener('DOMContentLoaded', (event) => {
        console.log('haha'); 
    });
    
    document.getElementById("add-blog-post-form")
        .addEventListener("submit", function(e){
            var newTitle = document.getElementById("blogPostTitle").value;
            var newContent = document.getElementById("blogPostContent").value;
    
            let blogPost = {
                id: ID(),
                title: newTitle,
                content: newContent
            }
            
            blogPosts.push(blogPost); 
            fetchPosts(); 
        });
        
    
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
}