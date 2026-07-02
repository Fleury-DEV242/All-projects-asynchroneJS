const button = document.querySelector("button");
const message = document.getElementById("message");

const downloadFile = (format) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (format === "iso" || format === "") {
        reject(new Error("Erreur lors du telechargement"));
      } else {
        resolve("Telechargement terminé");
      }
    }, 3000);
  });
};

button.addEventListener("click", () => {
  message.textContent = "Téléchargement en cours ...";
  message.style.color = "white";
  downloadFile("")
    .then((succes) => {
      message.textContent = "Téléchargement terminé ✅";
      message.style.color = "white";
    })
    .catch((error) => {
      message.textContent = error.message + "❌";
      console.error(error.message);
    });
});
