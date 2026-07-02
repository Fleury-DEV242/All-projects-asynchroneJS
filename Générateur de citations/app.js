const button = document.querySelector("button");
const message = document.getElementById("message");
const auteur = document.getElementById("auteur");

async function callApi() {
  const url = "data.json";
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);

  const request = await fetch(url);

  const response = await request.json();
  console.log(response);

  message.textContent = response[randomNumber].texte;
  auteur.textContent = "🗣️ " + response[randomNumber].auteur;
}
callApi();
button.addEventListener("click", callApi);
