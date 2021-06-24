import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Add blog post");
    }

    async getHtml() { 
        return `
            <head>
                <style>
                input[type=text] {
                    width: 50%;
                    padding: 12px 20px;
                    margin: 8px 0;
                    box-sizing: border-box;
                  }
                </style>
            </head>
            <form>
                <input type="text" id="blogPostTitle" name="blogPostTitle">
                <br>
                <input type="text" id="blogPostDesc" name="blogPostDesc">
            </form>`
    }
}