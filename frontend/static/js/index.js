import Dashboard from "./views/Dashboard.js";
import Projects from "./views/Projects.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const navigateTo = url => {
    history.pushState(null, null, url); 
    router(); 
};

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/projects" , view: Projects}, 
        // { path: "/contact" , view: () => console.log("Viewing Projects")}, 
    ];

    // Test each route for potential match 
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null && potentialMatch.result === true);
    console.log('matches found:', match);
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    console.log(potentialMatches);
    const view = new match.route.view();
    console.log(view.getHtml);
    
    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault(); 
            navigateTo(e.target.href);
        }
    });

    router(); 
})