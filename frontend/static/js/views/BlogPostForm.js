import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Add blog post");
    }

    async getHtml() { 
        return fetch('/static/html/blog-post-form.html')
                .then((res) => {
                    return res.text(); 
                })            
    };

    async getJs() {
        let blogPostScript = document.createElement("script");
        blogPostScript.setAttribute("src", "/static/js/server/blogposts_read_model.js");
        return blogPostScript; 
    }
}