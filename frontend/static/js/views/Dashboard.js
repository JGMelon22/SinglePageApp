import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Welcome back, User!</h1>
        <p>
            This is a simple single web app made with JS, CSS and HTML. I like C#, SQL and Linux :)
        </p>
        <p>
            <a href="/posts" data-link>View recent posts</a>
        </p>
        
        `;
    }
}