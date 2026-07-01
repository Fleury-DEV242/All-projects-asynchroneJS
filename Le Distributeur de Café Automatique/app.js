const preparerCafe = (nameCoffee, list) => {
  return new Promise((resolve, reject) => {
    if (list.includes(nameCoffee)) {
      setTimeout(() => {
        resolve(`Votre commande ${nameCoffee}, est prête`);
      }, 2000);
    } else {
      reject("Plus d'ingrédient pour cette recette");
    }
  });
};
preparerCafe("cappucino", ["expresso", "cappucino"])
  .then((valide) => console.log(valide))
  .catch((rupture) => console.log(rupture));
