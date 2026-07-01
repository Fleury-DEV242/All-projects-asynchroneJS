const simulerRequete = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.ceil(Math.random() * 9) + 1;
    setTimeout(() => {
      if (randomNumber % 2 == 0) {
        resolve("Reussite " + randomNumber);
      } else {
        reject("Echec " + randomNumber);
      }
    }, 2000);
  });
};

async function gererRequete() {
  console.log("Chargement en cours...");
  try {
    const result = await simulerRequete();
    console.log(result);
  } catch (erreur) {
    console.log(erreur);
  } finally {
    console.log("Chargement terminé");
  }
}
gererRequete();
