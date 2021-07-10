import AbstractView from "./AbstractView.js";
import { setupBlogPostsService } from "./BlogPostsService.js";

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
        setupBlogPostsService(); 
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