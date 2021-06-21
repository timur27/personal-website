import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Tech Stack");
    }

    async getHtml() {
        return `
        <p>
            About the tech stack (with note where I'm an expert, and what is interesting for me and I'm learning it
        </p>
        `;
    }
}