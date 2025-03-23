import shieldLogo from '../assets/images/shieldlogo.png'; // Renamed to avoid conflict

export default function buildHeader() {
    const header = document.createElement("header");
    const logoContainer = document.createElement("div"); // Renamed to avoid overwriting

    const image = document.createElement("img");
    image.src = shieldLogo; // Now correctly referencing the imported image

    const companyName = document.createElement("p");

    logoContainer.classList.add("logo");
    companyName.textContent = "Odin's Pizza Place";

    header.appendChild(logoContainer);
    logoContainer.appendChild(image);
    logoContainer.appendChild(companyName);

    return header;
}

