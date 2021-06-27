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
        var writeModelScript = '/static/js/server/blogposts_write_model.js';
        var readModelScript = '/static/js/server/blogposts_read_model.js';
        var persistenceScript = '/static/js/server/blogposts_persistence.js';
    
        return [this.checkAndAddScript(writeModelScript), this.checkAndAddScript(persistenceScript), this.checkAndAddScript(readModelScript)];
    }

    checkAndAddScript(scriptPath) {
        if (document.querySelectorAll('[src="' + scriptPath + '"]').length === 0) {
            let blogPostScript = document.createElement("script");
            blogPostScript.setAttribute("src", scriptPath);
            return blogPostScript; 
        }
    }
}