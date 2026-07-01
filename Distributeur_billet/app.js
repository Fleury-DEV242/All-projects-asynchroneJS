function retirerArgent(montant) {
  const solde = 100;
  return new Promise((resolve, reject) => {
    if (montant <= solde) {
      resolve("Retrait Validé");
    } else {
      reject("Solde insuffisant");
    }
  });
}

async function gererRetrait() {
  try {
    const result = await retirerArgent(34);
    console.log(result);
  } catch (erreur) {
    console.log(erreur);
  }
}
gererRetrait();
