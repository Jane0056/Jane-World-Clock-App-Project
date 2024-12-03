function updateTimeZone() {
  //Berlin TimeZone

  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");
  berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = berlinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Brisbane Timezone

  let brisbaneElement = document.querySelector("#brisbane");
  let brisbaneDateElement = brisbaneElement.querySelector(".date");
  let brisbaneTimeElement = brisbaneElement.querySelector(".time");
  let brisbaneTime = moment().tz("Australia/Brisbane");
  brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM Do YYYY");
  brisbaneTimeElement.innerHTML = brisbaneTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Chicago Timezone

  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let chicagoTime = moment().tz("America/Chicago");
  chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
  chicagoTimeElement.innerHTML = chicagoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //London Timezone

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Namibia Timezone

  let namibiaElement = document.querySelector("#namibia");
  let namibiaDateElement = namibiaElement.querySelector(".date");
  let namibiaTimeElement = namibiaElement.querySelector(".time");
  let namibiaTime = moment().tz("Africa/Windhoek");
  namibiaDateElement.innerHTML = namibiaTime.format("MMMM Do YYYY");
  namibiaTimeElement.innerHTML = namibiaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Santiago Timezone

  let santiagoElement = document.querySelector("#santiago");
  let santiagoDateElement = santiagoElement.querySelector(".date");
  let santiagoTimeElement = santiagoElement.querySelector(".time");
  let santiagoTime = moment().tz("America/Santiago");
  santiagoDateElement.innerHTML = santiagoTime.format("MMMM Do YYYY");
  santiagoTimeElement.innerHTML = santiagoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Seoul Timezone

  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");
  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTimeZone();
setInterval(updateTimeZone, 1000);
