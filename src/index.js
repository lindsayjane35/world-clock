function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    losAngelesTimeElement.innerHTML = `
    <div class="time">${losAngelesTime.format(
      "h:mm:ss"
    )} <span class="ampm">${losAngelesTime.format("A")}</span></div>
    `;
  }
  //New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = moment().format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = `
    <div class="time">${newYorkTime.format(
      "h:mm:ss"
    )} <span class="ampm">${newYorkTime.format("A")}</span></div>
    `;
  }

  //Copenhagen
  let copenhagenElement = document.querySelector("#copenhagen");
  if (copenhagenElement) {
    let copenhagenDateElement = copenhagenElement.querySelector(".date");
    let copenhagenTimeElement = copenhagenElement.querySelector(".time");
    let copenhagenTime = moment().tz("Europe/Copenhagen");

    copenhagenDateElement.innerHTML = moment().format("MMMM Do YYYY");
    copenhagenTimeElement.innerHTML = `
    <div class="time">${copenhagenTime.format(
      "h:mm:ss"
    )} <span class="ampm">${copenhagenTime.format("A")}</span></div>
    `;
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format(
      "h:mm:ss"
    )} <span class="ampm">${cityTime.format("A")}</span></div>
  </div>
  <a href="/" class="reset"><em>RESET</em></a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
