import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Hi there, I'm Timur :) </h1>
            <p>
                Software developer with over 3 years of experience. 
            </p>
            <p>
                <a href="/projects" data-link>View my projects</a> if you are interested to see what I'm working on. 
            </p>
        `;
    }
}