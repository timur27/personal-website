import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Open Source Commitment");
    }

    async getHtml() {
        return `
            <p>
                A little bit about my commitment into open-source community.
            </p>
        `;
    }
}