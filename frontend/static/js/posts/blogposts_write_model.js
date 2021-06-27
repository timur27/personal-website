document.getElementById("add-blog-post-form")
    .addEventListener("submit", function(e){
        var title = document.getElementById("blogPostTitle").value;
        var desc = document.getElementById("blogPostDesc").value;
        
        addPost(title, desc); 
    });