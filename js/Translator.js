const translator = document.querySelector(".translator");
const language = document.querySelectorAll(".en, .am");

translator.addEventListener("click", () => {
  language.forEach((text) => {
    text.classList.toggle("display");
  });
});
