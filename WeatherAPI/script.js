// api key 

const apiKey = "5d73a99ff554352719be2118aab73699";

// function
function getWeather() {
    const cityName =
        document.getElementById("cityInput").value || "Anand ";

    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=" +
        apiKey +
        "&units=metric"
    )
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            document.getElementById("city").innerText = data.name;
            document.getElementById("temp").innerText =
                Math.round(data.main.temp) + "°";

            document.getElementById("weatherText").innerText =
                data.weather[0].description.toUpperCase();

            document.getElementById("minTemp").innerText =
                "↓ " + Math.round(data.main.temp_min) + "°";

            document.getElementById("maxTemp").innerText =
                "↑ " + Math.round(data.main.temp_max) + "°";

            document.getElementById("extra").innerText =
                "Wind " +
                data.wind.speed +
                " km/h · Humidity " +
                data.main.humidity +
                "%";

            // for date 
            var today = new Date();
            document.getElementById("day").innerText =
                today.toLocaleDateString("en-US", { weekday: "long" });

            document.getElementById("date").innerText =
                today.toLocaleDateString();
        })
        // catch if error occurs
        .catch(function () {
            alert("City not found!");
        });
}
getWeather();