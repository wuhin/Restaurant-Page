
export const loadHome = () => {
    
    const content = document.getElementById("content");

    const generalContainer = document.createElement("div");
    generalContainer.classList.add("general-container");
    
    content.innerHTML = ""; // Clear existing content

        const headingContainer = document.createElement("div"); 
        headingContainer.classList.add("heading-container");   
        const heading = document.createElement("h1");
        heading.textContent = "Welcome to Our Restaurant!";
        headingContainer.appendChild(heading);
        generalContainer.appendChild(headingContainer);

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");

        const itemDescription = document.createElement("div");
        const ourStory = document.createElement("h2");
        ourStory.textContent = "Our Story";
        itemDescription.appendChild(ourStory);
        itemDescription.classList.add("item");
        itemDescription.classList.add("description");   
        const description = document.createElement("p");
        description.textContent = "Our restaurant offers a variety of delicious dishes made from fresh ingredients. We pride ourselves on providing excellent service and a cozy atmosphere for our guests.";
        itemDescription.appendChild(description);
        itemContainer.appendChild(itemDescription);

        
        const itemHour = document.createElement("div");
        const openingHours = document.createElement("h2");
        openingHours.textContent = "Opening Hours";
        itemHour.appendChild(openingHours);
        itemHour.classList.add("item");
        itemHour.classList.add("hours");
        const hours = document.createElement("p");
        hours.classList.add("hours");
        hours.textContent = "Monday - Sunday: 11:00 AM - 10:00 PM";
        itemHour.appendChild(hours);
        itemContainer.appendChild(itemHour);
        
        const itemLocation = document.createElement("div");
        const locationHeading = document.createElement("h2");
        locationHeading.textContent = "Location";
        itemLocation.appendChild(locationHeading);
        itemLocation.classList.add("item");
        itemLocation.classList.add("location");
        const location = document.createElement("p");
        location.classList.add("location");
        location.textContent = "123 Food Street, Flavor Town";
        itemLocation.appendChild(location);
        itemContainer.appendChild(itemLocation);

        generalContainer.appendChild(itemContainer);
        content.appendChild(generalContainer);
};