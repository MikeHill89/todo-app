export default function handleMenuClick() {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    main.innerHTML = "";
    section.innerHTML = `
        <div class ="pizzamenu">
            <h1>Odin's Pizza Menu</h1>
            <ul>
                <li>
                    <h2>Thor's Thunderous Feast</h2>
                    <p>A mighty combination of pepperoni, sausage, bacon, and ham. Fit for a thunder god!</p>
                    <div class="price">15 silver</div>
                </li>

                <li>
                    <h2>Loki's Cheesy Mischief</h2>
                    <p>Extra cheese, feta, and cheddar, creating a mischievously cheesy delight that even Loki would approve.</p>
                    <div class="price">12 silver</div>
                </li>

                <li>
                    <h2>Freyja's Garden Delight</h2>
                    <p>An array of fresh vegetables including mushrooms, bell peppers, tomatoes, and olives. A vegetarian's paradise!</p>
                    <div class="price">10 silver</div>
                </li>

                <li>
                    <h2>Bifrost BBQ Chicken</h2>
                    <p>Grilled chicken, red onions, and tangy BBQ sauce, creating a flavor journey across the rainbow bridge.</p>
                    <div class="price">14 silver</div>
                </li>

                <li>
                    <h2>Valhalla Veggie Supreme</h2>
                    <p>An assortment of veggies, artichoke hearts, and sun-dried tomatoes, delivering a supreme taste of the afterlife.</p>
                    <div class="price">11 silver</div>
                </li>

                <li>
                    <h2>Sif's Spicy Meatball Delight</h2>
                    <p>Spicy meatballs, jalapeños, and red pepper flakes, adding a fiery kick to this savory masterpiece.</p>
                    <div class="price">13 silver</div>
                </li>

                <li>
                    <h2>Frost Giant Hawaiian</h2>
                    <p>Pineapple, ham, and a touch of coconut, bringing a tropical twist to defeat the frost giants' chill.</p>
                    <div class="price">14 silver</div>
                </li>

                <li>
                    <h2>Mjolnir Meat Lovers</h2>
                    <p>A protein-packed ensemble of pepperoni, sausage, bacon, and ground beef. Only the worthy can handle this feast!</p>
                    <div class="price">16 silver</div>
                </li>

                <li>
                    <h2>Midgard Margherita</h2>
                    <p>Fresh mozzarella, tomatoes, and basil, a classic combination to please both mortals and gods alike.</p>
                    <div class="price">9 silver</div>
                </li>

                <li>
                    <h2>Valkyrie's Vegan Delight</h2>
                    <p>Artichoke hearts, black olives, red onions, and vegan cheese. A divine choice for our plant-powered patrons!</p>
                    <div class="price">12 silver</div>
                </li>
            </ul>
        </div>
    `;
    main.appendChild(section);
}
