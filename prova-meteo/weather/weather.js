const comisoUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=36.9489&longitude=14.6073&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,wind_speed_10m&hourly=temperature_2m,rain,visibility&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon";
const getWeather = function () {
  fetch(comisoUrl)
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        //certezza che la risposta è arrivata ed è ok
        return response.json();
      } else {
        //la risposta è arrivat ma non va bene
        throw new Error("Errore nella response del server");
      }
    })
    .then((weatherObject) => {
      console.log(weatherObject);
      const cardTitle = document.getElementById("current-temp");
      cardTitle.innerText = weatherObject.current.temperature_2m + " °C";
      const min = documet.getElementById("min");
      const max = documet.getElementById("max");
      min.innerText = "MIN: " + weatherObject.daily.temperature_2m_min[0];
      max.innerText = "MAX: " + weatherObject.daily.temperature_2m_max[0];
    })
    .catch((error) => {
      console.log(error);
    });
};

getWeather();
