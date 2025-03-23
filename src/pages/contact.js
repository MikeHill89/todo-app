export default function handleContactClick() {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    main.innerHTML = "";
    section.innerHTML = `
        <article>
        <h1>Contact Odin's Pizza</h1>
        <p>Have a question, comment, or craving for godly pizza? Reach out to us!</p>
        <address>
          <strong>Visit Us:</strong><br>
          123 Valhalla Way<br>
          Asgard, Realm of the Gods<br>
          98765
        </address>
        <p><strong>Call Us:</strong> +1 (555) 123-4567</p>
        <p><strong>Email Us:</strong> info@odinspizza.com</p>
        <p>For divine pizza emergencies, contact our Pizza Valkyries at emergency@odinspizza.com</p>
        <p>We look forward to serving you a slice of the gods!</p>
        </article>
    `;
    main.appendChild(section);
}
