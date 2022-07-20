let rating = document.querySelector(".ratings");
let submit = document.getElementById("submit_button");
let rate_card = document.querySelector(".rate_card");
let thank_you = document.querySelector(".thank_you_card");

rating.addEventListener("click", event => {

    let input = document.getElementById("rating_input");
    input.innerHTML = event.target.innerHTML;

    submit.addEventListener("click", () => {
        rate_card.style.display = "none";
        thank_you.style.display = "block";
    })
})



