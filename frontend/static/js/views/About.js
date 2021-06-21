import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About me");
    }

    async getHtml() {
        return `
            <p>
                A little bit about me and my background.
            </p>
        `;
    }
}