import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

    constructor(params) {
        super(params);
        this.setTitle("Blog posts");
    }

    async getHtml() { 
        return fetch('/static/html/blog-post-list.html')
                .then((res) => {
                    return res.text(); 
                })            
    };
    
    async getJs() {
        var readModelScript = '/static/js/posts/blogposts_read_model.js';
        var persistenceScript = '/static/js/posts/blogposts_persistence.js';
    
        return [this.checkAndAddScript(readModelScript), this.checkAndAddScript(persistenceScript)];
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