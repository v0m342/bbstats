const countrySelect = document.getElementById("country");
const leagueSelect = document.getElementById("league");
const usaLeagues = [
  ["NBA", "nba"],
  ["WNBA", "wnba"],
  ["G-League", "gleague"]
];

function addOption(selectElement, optionText, optionValue) {
  const option = document.createElement("option");
  option.text = optionText;
  option.value = optionValue;
  selectElement.add(option);
}

// console.log(usaLeagues[0]);

countrySelect.addEventListener("change", function () {
  // Clear the league select options
  leagueSelect.innerHTML = "";

  // Determine which country was selected and show the appropriate options
  if (countrySelect.value === "usa") {
    for (let index = 0; index < usaLeagues.length; index++) {
      const leagueText = usaLeagues[index][0];
      const leagueValue = usaLeagues[index][1];

      addOption(leagueSelect, leagueText, leagueValue);
    }
  } else if (countrySelect.value === "ukraine") {
    addOption(leagueSelect, "Superliga", "superliga");
  } else if (countrySelect.value === "spain") {
    addOption(leagueSelect, "ACB League", "acb");
  }

  // Show the league select element
  leagueSelect.style.display = "block";
});

const names = ["shaun", "mario", "luigi"];

for (let i = 0; i < names.length; i++) {
  //console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}
