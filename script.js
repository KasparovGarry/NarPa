const langButtonClick = () => {
  const langIcon = document.querySelector(".language-switcher .icon");
  const langBody = document.querySelector(".language-switcher .body");

  langIcon.addEventListener("click", () => {
    langBody.classList.toggle("show");
    langIcon.classList.toggle("show");
  });
};

langButtonClick();
