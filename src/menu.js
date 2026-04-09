export const loadMenu = () => {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear existing content

    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");

    const headingContainer = document.createElement("div");
    headingContainer.classList.add("heading-container");

    const heading = document.createElement("h2");
    heading.textContent = "Our Menu";
    headingContainer.appendChild(heading);
    content.appendChild(headingContainer);

    const menuItems = [
        { name: "Margherita Pizza", description: "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.", price: "$12" },
        { name: "Spaghetti Carbonara", description: "Traditional Italian pasta dish with eggs, cheese, pancetta, and pepper.", price: "$15" },
        { name: "Caesar Salad", description: "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.", price: "$10" },
        { name: "Chocolate Lava Cake", description: "Decadent chocolate cake with a gooey molten center, served with vanilla ice cream.", price: "$8" }
    ];

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menuItems.forEach(item => {
        

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("menu-item");

        const itemName = document.createElement("h2");
        itemName.textContent = item.name;
        itemContainer.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        itemContainer.appendChild(itemDescription);

        const itemPrice = document.createElement("p");
        itemPrice.textContent = `Price: ${item.price}`;
        itemContainer.appendChild(itemPrice);

        menuContainer.appendChild(itemContainer);
        
    });
    menuContent.appendChild(menuContainer);
    content.appendChild(menuContent);
}