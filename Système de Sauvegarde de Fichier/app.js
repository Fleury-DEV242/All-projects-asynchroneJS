const sauvegarderDonnees = (texte) => {
  return new Promise((resolve, reject) => {
    if (texte === "") {
      reject(new Error("Le contenu est vide !"));
    } else {
      resolve("Fichier sauvegarder");
    }
  });
};

const boutonEnregistrer = async () => {
  try {
    const save = await sauvegarderDonnees("");
    console.log(save);
  } catch (error) {
    console.error(`Erreur ${error.message}`);
  }
};
boutonEnregistrer();
