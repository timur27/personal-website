var posts = []; 


export function addPost(title, description) {
    posts.push({postName: title, postDescription: description});
}

export function getPosts() {
    console.log('invoked');
    return posts; 
}