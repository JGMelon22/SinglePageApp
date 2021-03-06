import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

// History API
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

// Client side router
const router = async () => {
    const routes = [
        {
            path: "/",
            view: Dashboard
        },

        {
            path: "/posts",
            view: Posts
        },

        {
            path: "/settings",
            view: Settings
        }
    ];

    // Test each router for potential matches 
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    // Looking for a match
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    // If there are no matches, will set a default to the dashboard (gimmick 404)
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    // New instance of the view which was matched at the route
    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(match.route.view());
};

// Changes the current history entry to that of the last page the user visited
window.addEventListener("popstate", router)

// Calling te route
document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener("click", e => {
        if (e.target.matches(["data-link"])) {

            // Navigates to the specific data link instead of a default behavior
            // And without refreshes
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});