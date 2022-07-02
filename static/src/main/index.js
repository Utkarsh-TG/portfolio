import updates from "./components/parallex";

const extras_btn = document.querySelector("#extras_btn");
const extras_menu = document.querySelector("#extras_menu");
const close_extras_menu_btn = document.querySelector("#close_extras_menu_btn");

extras_btn.addEventListener("click", ()=>{
    extras_menu.classList.add("active");
})

close_extras_menu_btn.addEventListener("click", ()=>{
    extras_menu.classList.remove("active");
})