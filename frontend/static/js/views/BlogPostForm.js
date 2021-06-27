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
        var scriptPath = '/static/js/server/blogposts_read_model.js';
        if (document.querySelectorAll('[src="' + scriptPath + '"]').length === 0) {
            let blogPostScript = document.createElement("script");
            blogPostScript.setAttribute("src", scriptPath);
            return blogPostScript; 
        }
        return "";
    }
}