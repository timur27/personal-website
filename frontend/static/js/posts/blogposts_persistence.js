var posts = []; 


function addPost(title, description) {
    posts.push({postName: title, postDescription: description});
}

function getPosts() {
    return posts; 
}