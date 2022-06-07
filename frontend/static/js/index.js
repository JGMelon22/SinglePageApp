// Client side router
const router = async () => {
    const routes = [
        {
            path: "/",
            view: () => console.log("Viewing Dashboard")
        },

        {
            path: "/posts",
            view: () => console.log("Viewing Posts")
        },

        {
            path: "/settings",
            view: () => console.log("Viewing Settings")
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

    console.log(match.route.view());
};

// Calling te route
document.addEventListener("DOMContentLoaded", () => {
    router();
});