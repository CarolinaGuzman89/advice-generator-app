const cardTitle = document.querySelector("#title");
const cardText = document.querySelector("#text");
const button = document.querySelector("#button");

button.addEventListener("click", event => {
    console.log(event)

    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        console.log(data.slip)
        cardTitle.textContent = `ADVICE #${data.slip.id}`
        cardText.textContent = `"${data.slip.advice}"`
    })
})