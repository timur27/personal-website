import About from "./views/About.js";
import Home from "./views/Home.js";
import OpenSource from "./views/OpenSource.js";
import Portfolio from "./views/Portfolio.js";
import TechStack from "./views/TechStack.js";
import Contact from "./views/Contact.js";

const routes = [
    { path: "/", view: Home },
    { path: "/about", view: About },
    { path: "/open-source", view: OpenSource },
    { path: "/portfolio" , view: Portfolio}, 
    { path: "/tech-stack" , view: TechStack}, 
    { path: "/contact" , view: Contact}
];

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const navigateTo = url => {
    history.pushState(null, null, url); 
    router(); 
};

const router = async () => {

    // Test each route for potential match 
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null && potentialMatch.result === true);
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();
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