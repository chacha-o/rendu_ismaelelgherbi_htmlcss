let form = document.querySelector("form");


form.addEventListener("submit", function (event) {
  //Annule le comportement par défault(envoie formulaire)
  event.preventDefault("");

  //conteneur des erreurs
  let errorContainer = document.querySelector(".message-error");
  //liste des erreurs
  let errorList = document.querySelector(".message-error ul");

  //on vide les erreurs et on cache le conteneur
  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  //on récupère le champ email
  let email = document.querySelector("#email");

  //si l'email est vide
  if (email.value === "") {
    //on affiche le contenue des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    //créer un <li></li> dans le html
    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";

    //on ajoute le li dans la liste des erruers
    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  //On récupère le champ pseudo
  let pseudo = document.querySelector("#pseudo");

  // Si le pseudo est vide
  if (pseudo.value.length < 6) {
    // On affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    //créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Le pseudo ne peut pas être inférieur à 6 caractère";

    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  //On récupère le champ password
  let password = document.querySelector("#password");

  // Si le password est vide
  if (password.value.length < 10) {
    // On affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    //créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText =
      "Le mot de passe ne peut pas être inférieur à 10 caractère et doit contenir au moins une majuscule, une minuscule et doit contenir un caractère spécial";

    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  //On récupère le champ password2
  let passwordConfirm = document.querySelector("#password2");

  // Si le pseudo est vide
  if (
    passwordConfirm.value !== password.value ||
    passwordConfirm.value === ""
  ) {
    // On affiche le conteneur des erreurs et supprime le succès
    errorContainer.classList.add("visible");
    passwordConfirm.classList.remove("success");

    //créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Les deux mots de passes doivent être identiques";

    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    passwordConfirm.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    email.classList.contains("success") &&
    pseudo.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordConfirm.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});