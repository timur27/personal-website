import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Portfolio");
    }

    async getHtml() {
        return `
        <p>
            About my commercial projects
        </p>
        `;
    }
}