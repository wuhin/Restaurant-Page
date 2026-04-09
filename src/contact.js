export const loadContact = () => {
    const content = document.getElementById("content");
    content.innerHTML = ""; // Clear existing content
    
    const generalContainer = document.createElement("div");
    generalContainer.classList.add("general-container");

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");


    const itemContact = document.createElement("div");
    itemContact.classList.add("item");
    itemContact.classList.add("contact");
    const heading = document.createElement("h2");
    heading.textContent = "Contact Us";
    itemContact.appendChild(heading);

    const phone = document.createElement("p");
    phone.textContent = "Phone: (123) 456-7890";
    itemContact.appendChild(phone);

    const email = document.createElement("p");
    email.textContent = "Email: info@restaurant.com";
    itemContact.appendChild(email);

    const address = document.createElement("p");
    address.textContent = "Address: 123 Food Street, Flavor Town";
    itemContact.appendChild(address);
    itemContainer.appendChild(itemContact);
    generalContainer.appendChild(itemContainer);
    content.appendChild(generalContainer);
}