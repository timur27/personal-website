import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Add blog posts");
    }

    async getHtml() { 
        return fetch('/static/html/blog-posts.html')
                .then((res) => {
                    return res.text(); 
                })            
    };
    
    async getJs() {
        var blogPostsService = '/static/js/views/BlogPostsService.js';
    
        return [this.checkAndAddScript(blogPostsService)];
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