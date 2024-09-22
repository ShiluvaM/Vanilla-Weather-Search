function searchCity(city) {
  let apiKey = b842bfbb6f04ee3730ao4ete0a9beb29;
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
  console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", handleSearchSubmit);
