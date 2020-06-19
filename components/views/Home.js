const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
export default st => `
<h3>Weather in ${st.weather.city}: ${
  st.weather.description
} // ${kelvinToFahrenheit(st.weather.temp)}F, feels like ${kelvinToFahrenheit(
  st.weather.feelsLike
)}F</h3>
<section id="jumbotron">
// Git Bash
<h2>terminal goes here</h2>
</section>
`;
