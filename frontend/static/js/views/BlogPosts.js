export default class {
    constructor(params) {
        console.log('has been created'); 
    }

    async getHtml() {
        return fetch('/static/html/blog-post-list.html')
                .then((res) => {
                    return res.text(); 
                })
    }
}