// 🌤 ПОГОДА (пример Open-Meteo)
async function getWeather() {
  const city = document.getElementById("city").value;

  // упрощённо: берём Киев как пример координат
  const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current_weather=true");
  const data = await res.json();

  document.getElementById("weather").innerHTML =
    "Температура: " + data.current_weather.temperature + "°C";
}

// 💱 ВАЛЮТА
async function getCurrency() {
  const res = await fetch("https://api.exchangerate.host/latest?base=USD");
  const data = await res.json();

  document.getElementById("currency").innerHTML =
    "EUR: " + data.rates.EUR + "<br>UAH: " + data.rates.UAH;
}

// 🗞 НОВОСТИ (GDELT)
async function getNews() {
  const res = await fetch("https://api.gdeltproject.org/api/v2/doc/doc?query=world&format=json");
  const data = await res.json();

  let html = "";
  data.articles.slice(0, 5).forEach(a => {
    html += "<p>📰 " + a.title + "</p>";
  });

  document.getElementById("news").innerHTML = html;
}
