const chargerImage = (url) => {
  return new Promise((resolve, reject) => {
    if (url === "" || !url.startsWith("http")) {
      reject("URL invalide");
    } else {
      setTimeout(() => {
        resolve(`Image chargée avec succès depuis ${url}`);
      }, 2000);
    }
  });
};
chargerImage("http://www.monsite.com").then((succes) => console.log(succes));
