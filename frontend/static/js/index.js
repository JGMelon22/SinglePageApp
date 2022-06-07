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

    console.log(potentialMatches);
};

// Calling te route
document.addEventListener("DOMContentLoaded", () => {
    router();
});