const buttonList = document.getElementById("button-list")
const navList = document.getElementById("nav-list");
const navDisplay = ()=> {
    buttonList.classList.toggle("icon--active");
    (navList.classList.toggle("display")) ? header.style.display = "flex" :  header.style.display = "inline";
}
buttonList.addEventListener("click", navDisplay);