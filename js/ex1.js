const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
   ];
    
   // Return an array of characters belonging to a house
const getCharacters = houseCode => {
switch (houseCode) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return []; // Empty array
    }
};
// const listHouses = () => {
//     houses.forEach(house =>{
//         const optionElement = document.createElement("option");
//         optionElement.value = house.code;
//         optionElement.textContent = house.name;
//         selectElement.appendChild(optionElement)
//     })

// } 
    
document.getElementById("house").addEventListener("change", e => {
var character_name = e.target.value;
character_value = getCharacters(character_name);
house_element = document.getElementById("characters");
house_element.innerHTML = "";
for (i = 0; i < character_value.length; i++) {
    const elementList = document.createElement("li");
    elementList.textContent = character_value[i];
    house_element.appendChild(elementList);
    }
});
   