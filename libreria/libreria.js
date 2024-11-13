const libreriaUrl = "https://striveschool-api.herokuapp.com/books";

const getBoock = function () {
  fetch(libreriaUrl)
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella risposta del servrer");
      }
    })
    .then((boockObject) => {
      console.log(boockObject);
    })
    .catch();
};
