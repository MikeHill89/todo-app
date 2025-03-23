import handleHomeClick from "../pages/home.js";
import handleMenuClick from "../pages/menu.js";
import handleContactClick from "../pages/contact.js";

export default function buildNav() {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const liHome = document.createElement("li");
    const liMenu = document.createElement("li");
    const liContact = document.createElement("li");

    liHome.textContent = "home";
    liMenu.textContent = "menu";
    liContact.textContent = "contact";

    liHome.addEventListener("click", handleHomeClick);
    liMenu.addEventListener("click", handleMenuClick);
    liContact.addEventListener("click", handleContactClick);

    ul.appendChild(liHome);
    ul.appendChild(liMenu);
    ul.appendChild(liContact);

    nav.appendChild(ul);
    return nav;
}


