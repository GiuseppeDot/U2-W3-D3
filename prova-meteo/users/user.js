const getUser = function () {
  fetch("https://jsonplaceholder.typicode.com/users", {
    //method: "get"  <--- metodo di default di fetch()
    // body: nelle chiamate get si vogliono ottenere dei dati
    // headers: {
    //     // Authotization : "xxxxxxxxxxxxx"
    // }
  })
    .then((response) => {
      //finale buono
      console.log("siamo nel then");
      console.log("oggetti response", response);
      //per capire se la chiamata è andata a buon fine, bisogna verificare il valore della propietà "ok"
      if (response.ok) {
        //response.ok === ture / response.ok
        //response.ok è true
        // 200, 201
        return response.json();
      } else {
        //response.ok è false
        //400, 401,403, 404, 500 ecc.
        throw new Error("La risposta del server non è ok");
        //throw cioè lancia un nuovo Errore
        //lanciare una risposta a mano serve per teletrasportarci nel catch e gestire gli errori in un blocco solo
      }
    })
    .then((date) => {
      const usersRow = document.getElementById("users-row");
      users.forEach((user) => {
        const newCol = document.createElement("div");
        newCol.classList.add(" col", "col-12", "col-md-6", "col-lg-3");
        newCol.innerHTML = `
      <div class="card">
              <img
                src="https://placecats.com/bella/300/200"
                class="card-img-top"
                alt="kitten"
              />
              <div class="card-body">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">
                 ${user.website}
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>`;
        usersRow.appendChild(newCol);
      });
      console.log("ecco gli utenti", date);
    })
    .catch((error) => {
      // finale cattivo
      //   alert("errore nella chiamata")
      console.log(error);
    });
};

getUser();
