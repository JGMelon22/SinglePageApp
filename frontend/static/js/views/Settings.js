import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
        <h1>Settings</h1>
        <p>
            In this page, you can see example of settings
        </p>
        <ul>
            <li>Display</li>
            <li>Sound</li>
            <li>Storage</li>
            <li>Privacy</li>
        </ul>
        `;
    }
}