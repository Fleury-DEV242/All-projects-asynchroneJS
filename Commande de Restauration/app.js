const prendreCommande = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Poulet frit");
    }, 1000);
  });
};
const preparerPlat = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Plat en préparation...");
    }, 2000);
  });
};

const livrerRepas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Commande livrée");
    }, 3000);
  });
};

const executerService = async () => {
  const Commande = await prendreCommande();
  console.log(Commande);

  const Plat = await preparerPlat(Commande);
  console.log(Plat);

  const livraison = await livrerRepas(Plat);
  console.log(livraison);
};
executerService();
