var posts = []; 


export function addPost(title, description) {
    posts.push({postName: title, postDescription: description});
    console.log(posts);
}

export function getPosts() {
    console.log('invoked');
    return posts; 
}