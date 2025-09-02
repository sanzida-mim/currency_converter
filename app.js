const BASE_URL = "https://api.fxratesapi.com/latest?";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

/* This code snippet is iterating over each dropdown select element in the HTML document and populating
it with options based on the `countryList` object. For each select element, it creates a new option
element, sets its text and value to the currency code (currCode), and appends it to the select
element. */
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

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

/**
 * The function `updateFlag` updates the image source of a flag based on the selected country code.
 * @param el - The `el` parameter in the `updateFlag` function is typically a reference to an input
 * element, such as a dropdown select element, that contains the value representing a country code.
 */
const updateFlag = (el) => {
    let currCode = el.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img = el.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal= amount.value;

    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}base=${fromCurr.value.toLowerCase()}&currencies=${toCurr.value.toLowerCase()}&format=json`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
})