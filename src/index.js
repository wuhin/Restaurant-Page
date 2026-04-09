import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

const homePage = document.getElementById("home-btn");
const menuPage = document.getElementById("menu-btn");
const contactPage = document.getElementById("contact-btn");


homePage.addEventListener("click", () => {
    loadHome();
});

menuPage.addEventListener("click", () => {
    loadMenu();
});

contactPage.addEventListener("click", () => {
    loadContact();
});

loadHome(); // Load home page by default on initial load;