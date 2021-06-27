var posts = []; 
 
document.getElementById("add-blog-post-form")
    .addEventListener("submit", function(e){
        posts.push('tk'); 
        console.log(posts);
    });

function getPosts() {
    return posts; 
}