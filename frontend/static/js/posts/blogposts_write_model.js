import BlogPosts from "./../views/BlogPosts.js";


    document.getElementById("add-blog-post-form")
    .addEventListener("submit", function(e){
        // !!! IMPROVE !!! 
        // todo move this action into other layer
        console.log('we are here'); 
        document.querySelector("#posts").innerHTML =  new BlogPosts().getHtml(); 

        var title = document.getElementById("blogPostTitle").value;
        var desc = document.getElementById("blogPostContent").value;
        
        addPost(title, desc); 
    });


const addNewPost = async () => {
        // !!! IMPROVE !!! 
        // todo move this action into other layer
        console.log('we are here'); 
        document.querySelector("#posts").innerHTML = await new BlogPosts().getHtml(); 

        var title = document.getElementById("blogPostTitle").value;
        var desc = document.getElementById("blogPostContent").value;
        
        addPost(title, desc); 
}