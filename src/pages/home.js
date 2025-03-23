export default function handleHomeClick() {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    main.innerHTML = "";
    section.innerHTML = `
        <article><h1>Welcome to Odin's Pizza - Where Every Slice is Legendary!</h1>
            <p>Greetings, hungry mortals, and behold the gastronomic realm of Odin's Pizza! We're not your average pizza joint; we're a cosmic pizzeria, ruled by the mighty Odin himself. Our pizzas are so divine that even the gods themselves can't resist taking a bite.</p>
            <p>At Odin's Pizza, we've harnessed the power of the pizza stone to create pies that are hotter than the fires of Muspelheim and cheesier than Loki's schemes. Our dough is kneaded with the strength of Thor's hammer, ensuring a crust that's as sturdy as the walls of Asgard (but much tastier).</p>
            <p>Our toppings are chosen with the wisdom of Odin, featuring only the finest ingredients from the nine realms. Whether you crave the meaty might of the Thor's Thunderous Feast or the vegetarian delights of Freyja's Garden Delight, our menu is a symphony of flavors fit for Valhalla.</p>
            <p>And fear not, for our delivery Valkyries are swift and sure, ensuring your pizza arrives at your doorstep in record time. We promise, your taste buds will embark on a journey more epic than the adventures of the Allfather himself.</p>
            <p>So, embark on a culinary quest with Odin's Pizza - because when it comes to satisfying your hunger, we're the true gods of flavor! Valhalla in every bite!</p></article>
    `;
    main.appendChild(section);
}
