export default function buildFooter() {
    const footer = document.createElement("footer");

    // Create a link element
    const link = document.createElement("a");
    link.href = "https://github.com/MikeHill89";
    link.textContent = "Github.com/MikeHill89";

    // Append the link to the footer
    footer.appendChild(link);

    return footer;
}

