// Function to update the times for predefined cities
function updateTimeZone() {
  //Berlin TimeZone
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Brisbane TimeZone
  let brisbaneElement = document.querySelector("#brisbane");
  if (brisbaneElement) {
    let brisbaneDateElement = brisbaneElement.querySelector(".date");
    let brisbaneTimeElement = brisbaneElement.querySelector(".time");
    let brisbaneTime = moment().tz("Australia/Brisbane");

    brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM Do YYYY");
    brisbaneTimeElement.innerHTML = brisbaneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Chicago TimeZone
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = chicagoElement.querySelector(".date");
    let chicagoTimeElement = chicagoElement.querySelector(".time");
    let chicagoTime = moment().tz("America/Chicago");

    chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = chicagoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //London TimeZone
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Namibia TimeZone
  let namibiaElement = document.querySelector("#namibia");
  if (namibiaElement) {
    let namibiaDateElement = namibiaElement.querySelector(".date");
    let namibiaTimeElement = namibiaElement.querySelector(".time");
    let namibiaTime = moment().tz("Africa/Windhoek");

    namibiaDateElement.innerHTML = namibiaTime.format("MMMM Do YYYY");
    namibiaTimeElement.innerHTML = namibiaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Santiago TimeZone
  let santiagoElement = document.querySelector("#santiago");
  if (santiagoElement) {
    let santiagoDateElement = santiagoElement.querySelector(".date");
    let santiagoTimeElement = santiagoElement.querySelector(".time");
    let santiagoTime = moment().tz("America/Santiago");

    santiagoDateElement.innerHTML = santiagoTime.format("MMMM Do YYYY");
    santiagoTimeElement.innerHTML = santiagoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Seoul TimeZone
  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
    seoulTimeElement.innerHTML = seoulTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

// Function to update the city dynamically based on dropdown selection
function updateCity(event) {
  let cityTimezone = event.target.value;

  // Extract city name from timezone
  let cityName = cityTimezone.split("/")[1].replace("_", " ");

  // Get the current time in the selected timezone
  let cityTime = moment.tz(cityTimezone);

  // Update the HTML to display the selected city's time and date
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}
          <small>${cityTime.format("A")}</small>
        </div>
    </div>
  `;
}

// Add event listener to the dropdown for updating the selected city
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

// Call updateTime every second to keep times updated
updateTimeZone();
setInterval(updateTimeZone, 1000);
