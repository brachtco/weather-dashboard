var userformEl = document.querySelector("#user-form");
var searchInputEl = document.querySelector("#city-name");
var buttonEl = document.querySelector(".btn");
var savedHistory = document.querySelector(".savedHistory");

//EventListener on the search button fires getForcast function when clicked
buttonEl.addEventListener("click", getForecast);


function displayForecast(data) {
  // var { icon } = data.weather[0];
  var { name } = data;
  var { temp, humidity } = data.main;
  var { speed } = data.wind;
  console.log(name, temp, humidity, speed);

  document.querySelector(".city").innerText = name;
  document.querySelector(".temp").innerText = temp;
  document.querySelector(".humidity").innerText = humidity;
  document.querySelector(".wind").innerText = speed;

//remove the second decimal number
  var number  = document.querySelector(".temp");
  var decimal = Math.trunc(number);


  //using dayjs to show today's date
  var today = dayjs();
  $('card').text(today.format('MMMM D, YYYY'));
}


//Function with api key and api url as fetch method
function getForecast(event) {
  event.preventDefault();
  var city = searchInputEl.value;
  var weatherAPIKey = "8d6152607e462090ee3f2bd23231cc6b";
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    weatherAPIKey;

  document.querySelector(".city").innerText = name;

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var obj = JSON.parse(JSON.stringify(data));
//for loop to loop through the data and post 5 day forecast
      for (i = 0; i < 5; i++) {
       // document.querySelector(".city" +(i + 1) + "name").innerText = +Number(data.main[i].main.temp);
      }

      displayForecast(obj);
    });
//create function and variables to save search history of cities to the page
    function searchHistory(event) {
        event.preventDefault();
        var searchHistoryEl = $('input[name="city-name"]').val;

        var searchHistoryListEl = $('<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">');
        searchHistoryListEl.text(searchHistoryEl)
        searchHistoryEl.append(searchHistoryListEl)

    }

    savedHistory.on("click", searchHistory)
}
