const BASE_URL = "https://api.fxratesapi.com/latest?base=USD&currencies=BDT&format=json";

const dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if(select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "BDT") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
}