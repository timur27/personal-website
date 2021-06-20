
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const router = async () => {
    const routes = [
        { path: "/" , view: () => console.log("Viewing Dashboard")}, 
        { path: "/projects" , view: () => console.log("Viewing Contact")}, 
        { path: "/contact" , view: () => console.log("Viewing Projects")}, 
    ];

    // Test each route for potential match 
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    console.log(potentialMatches);
};

document.addEventListener("DOMContentLoaded", () => {
    router(); 
})