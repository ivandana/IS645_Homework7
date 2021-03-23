const autocomplete = () => {
    const textValue = countryElement.value;
    const divElement = document.getElementById("suggestions");
    
    const countryListResult = countryList.filter(country => country.toLocaleLowerCase().startsWith(textValue));
    divElement.innerHTML = "";
    for(country of countryListResult) {
        const inputElement = document.createElement("input");
        inputElement.type = "textValue";
        inputElement.value = country;
        inputElement.classList.add("suggestion");
        inputElement.addEventListener("click",e  => {
            countryElement.value = e.target.value;
            divElement.innerHTML = "";
        });
        divElement.appendChild(inputElement);
        divElement.appendChild(document.createElement("br"));
    }
}

// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
];
  
const countryElement =document.getElementById("country");
countryElement.addEventListener("keyup", autocomplete);
