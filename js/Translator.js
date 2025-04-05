const translator = document.querySelector(".translator");
const enTexts = document.querySelectorAll(".en");
const amTexts = document.querySelectorAll(".am");

const isTranslated = localStorage.getItem("translated") === "true";

if (isTranslated) {
    enTexts.forEach(text => text.classList.remove("display"));
    amTexts.forEach(text => text.classList.add("display"));
} else {
    enTexts.forEach(text => text.classList.add("display"));
    amTexts.forEach(text => text.classList.remove("display"));
    
}

translator.addEventListener("click", () => {
    const isActive = enTexts[0].classList.contains("display");

    enTexts.forEach(text => text.classList.toggle("display"));
    amTexts.forEach(text => text.classList.toggle("display"));

    localStorage.setItem("translated", !isActive);
});
