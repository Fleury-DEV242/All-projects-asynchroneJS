const attendreReveil = (boutonSnooze) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (boutonSnooze == true) {
        reject("Bouton Snooze activé !");
      } else {
        resolve("Dring Dring ! Réveil !");
      }
    }, 3000);
  });
};

const routineMatin = async () => {
  try {
    const result = await attendreReveil(false);
    console.log(result);
    console.log("Passer une bonne journée !");
  } catch (sleep) {
    console.log(sleep);
    console.log("Encore 5 minutes de sommeil...");
  } finally {
    console.log("Sortir du lit (tôt ou tard)");
  }
};
routineMatin();
