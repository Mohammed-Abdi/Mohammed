const translator = document.querySelector(".translator");
const languageElements = document.querySelectorAll(".en, .am");

const isTranslated = localStorage.getItem("translated") === "true";
if (isTranslated) {
    languageElements.forEach(text => text.classList.add("display"));
}

translator.addEventListener("click", () => {
    const isActive = languageElements[0].classList.toggle("display");
    languageElements.forEach(text => text.classList.toggle("display"));
    
    localStorage.setItem("translated", isActive);
});
