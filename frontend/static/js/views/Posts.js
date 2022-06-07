import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
        <h1>Posts</h1>
        <p>
            You are at the posts pages. Here you can see only gibberish text, so just ignore what is written as the main focus here was practicing JS and learning a bit of express as well.
        </p>
        `;
    }
}