import BlogPosts from "./../views/BlogPosts.js";
import * as MyFn from "./blogposts_persistence.js"


document.getElementById("add-blog-post-form")
.addEventListener("submit", function(e){
    var title = document.getElementById("blogPostTitle").value;
    var desc = document.getElementById("blogPostContent").value;
    
    MyFn.addPost(title, desc); 
    setInnerHtml();
    console.log(MyFn.getPosts()); 

});

const setInnerHtml = async () => {
    document.querySelector("#posts").innerHTML =  await new BlogPosts().getHtml(); 
}