import AbstractView from "./AbstractView.js";

const hardcoded_url =
    "/static/html/blog-post-form.html";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Add blog post");
    }

    async getHtml() { 
        return fetch('/static/html/blog-post-form.html')
                .then((res) => {
                    return res.text();
                });
    }
}