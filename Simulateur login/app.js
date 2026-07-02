const button = document.querySelector("button");
const email = document.getElementById("email");
const password = document.getElementById("password");

const logIn = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "123456") {
        resolve("Bienvenue Admin");
      } else {
        reject(new Error("Email ou mot de passe incorrect"));
      }
    }, 2000);
  });
};

button.addEventListener("click", async () => {
  if (email.value === "" || password.value === "") {
    console.error("L'un des champs est vide");
  } else {
    try {
      const result = await logIn(email.value, password.value);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
});
