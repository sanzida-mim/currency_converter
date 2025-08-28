const URL = "https://catfact.ninja/fact";
const factPara = document.getElementById("fact");

const getFacts = async () => {
    let response = await fetch(URL);

    console.log(response);
    let data = await response.json();
    factPara.innerText = data.fact;
}