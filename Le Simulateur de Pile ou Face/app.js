const lancerPierre = () => {
  return new Promise((resolve, reject) => {
    let lancer = Math.random();
    if (lancer > 0.5) {
      resolve(function () {
        return "Gagner... Pile";
      });
    } else {
      reject("Perdu... Face");
    }
  });
};

lancerPierre()
  .then((succes) => console.log(succes))
  .catch((echec) => console.log(echec));
