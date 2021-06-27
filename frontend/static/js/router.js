import About from "./views/About.js";
import Home from "./views/Home.js";
import OpenSource from "./views/OpenSource.js";
import Portfolio from "./views/Portfolio.js";
import TechStack from "./views/TechStack.js";
import Contact from "./views/Contact.js";
import BlogPostForm from "./views/BlogPostForm.js";

const routes = [
    { path: "/", view: Home },
    { path: "/about", view: About },
    { path: "/open-source", view: OpenSource },
    { path: "/portfolio" , view: Portfolio}, 
    { path: "/tech-stack" , view: TechStack}, 
    { path: "/contact" , view: Contact},
    { path: "/blog-post/add" , view: BlogPostForm}
];

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault(); 
            navigateTo(e.target.href);
        }
    });

    router(); 
})

const navigateTo = url => {
    history.pushState(null, null, url); 
    router(); 
};

const router = async () => {
    // Establish which route path equals to the current one chosen in the browser
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname === route.path
        };
    });

    // Establish if there is a route from previous step which was matched
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null && potentialMatch.result === true);

    // If no matches in existing routes established, then just set up the root / endpoint as a match 
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    // Get the object which represents the matched route
    const view = new match.route.view();

    // Find the html in this object and it to document's inner html
    document.querySelector("#content").innerHTML = await view.getHtml(); 

    // Find and add the js of the dynamically loaded html, if it's present
    for (let script of await view.getJs()) {
        if (script) {
            document.head.appendChild(script);
        }
    }
};