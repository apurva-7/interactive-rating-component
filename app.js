const mainContainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".thank-you");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", () => {
	thankYou.classList.remove("hidden");
	mainContainer.classList.add("hidden");
});

const rating = document.getElementById("rating");
const ratings = document.querySelectorAll(".btn");


ratings.forEach((rate) => {
    rate.addEventListener(("click"), () => {
        rating.innerHTML = rate.innerHTML;
    })
})