const countrySelect = document.getElementById("country");
const leagueSelect = document.getElementById("league");

const usaLeagues = [
  ["NBA", "nba"],
  ["WNBA", "wnba"],
  ["G-League", "gleague"]
];



// Fetch API
// Type of requests:
// GET - 
// POST  
// PUT
// DELETE

const countries = fetch('http://localhost:3000/api/areas')
.then(function(response) {
  console.log(response)
  return response.json()
})
.then(function(data) {
  console.log(data)
})
.catch((reason) => console.log(reason));

console.log(countries)

function addOption(selectElement, optionText, optionValue) {
  const option = document.createElement("option");
  option.text = optionText;
  option.value = optionValue;
  selectElement.add(option);
}

// Оголошення або визначення функція
function generateOptions(selectElement, optionsArray){
  for (let index = 0; index < optionsArray.length; index++) {
    const leagueText = optionsArray[index][0];
    const leagueValue = optionsArray[index][1];

    addOption(selectElement, leagueText, leagueValue);
  }
}



countrySelect.addEventListener("change", function () {
  // Clear the league select options
  leagueSelect.innerHTML = "";

  // Determine which country was selected and show the appropriate options
  if (countrySelect.value === "usa") {
    // Виклик або запуск функції
    generateOptions(leagueSelect, usaLeagues)
  } else if (countrySelect.value === "ukraine") {
    addOption(leagueSelect, "Superliga", "superliga");
  } else if (countrySelect.value === "spain") {
    addOption(leagueSelect, "ACB League", "acb");
  }

  // Show the league select element
  leagueSelect.style.display = "block";
});

