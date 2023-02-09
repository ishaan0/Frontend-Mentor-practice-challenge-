const ratingSection = document.querySelector(".rating-section");
const thankYouSection = document.querySelector(".thank-you-section");
const ratingButtons = document.querySelectorAll(".ratings .round");
const submitButton = document.querySelector(".submit");
const ratingNumber = document.querySelector(".seleted-rating span");
let lastClickedButtonIndex = -1;

// select rating
for (let i = 0; i < ratingButtons.length; i++) {
  ratingButtons[i].addEventListener("click", () => {
    if (lastClickedButtonIndex != -1) {
      ratingButtons[lastClickedButtonIndex].classList.remove("active");
      ratingButtons[lastClickedButtonIndex].classList.add("hover-on");
    }

    ratingButtons[i].classList.add("active");
    ratingButtons[i].classList.remove("hover-on");
    lastClickedButtonIndex = i;
  });
}

submitButton.addEventListener("click", () => {
  if (lastClickedButtonIndex != -1) {
    ratingSection.style.display = "none";
    thankYouSection.style.display = "flex";
    ratingNumber.textContent = (lastClickedButtonIndex+1).toString();
  }
});
