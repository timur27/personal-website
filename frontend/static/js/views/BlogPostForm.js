import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

    constructor(params) {
        super(params);
        this.setTitle("Add blog posts");
    }

    async getHtml() { 
        return fetch('/static/html/blog-post-form.html')
                .then((res) => {
                    return res.text(); 
                })            
    };
    
    async getJs() {
        var writeModelScript = '/static/js/posts/blogposts_write_model.js';
        var persistenceScript = '/static/js/posts/blogposts_persistence.js';
    
        return [this.checkAndAddScript(writeModelScript), this.checkAndAddScript(persistenceScript)];
    }

    checkAndAddScript(scriptPath) {
        if (document.querySelectorAll('[src="' + scriptPath + '"]').length === 0) {
            let blogPostScript = document.createElement("script");
            blogPostScript.setAttribute("src", scriptPath);
            blogPostScript.setAttribute("type", "module");
            return blogPostScript; 
        }
    }
}