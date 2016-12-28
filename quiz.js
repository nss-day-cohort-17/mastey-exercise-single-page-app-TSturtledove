var inventory = [];
loadInventory();

function populatePage (inry) {
  var inventory = JSON.parse(inry.target.responseText)
  console.log("Inventory", inventory)
  // Loop over the inventory and populate the page
  var carsForSale = ""
  for (var i = 0; i < inventory.cars.length; i++) {
    carsForSale += `<div class="blackBor" onclick="focusing()">
                      <input id="radio${[i]}" type="radio" name="card" value="all"><label for="radio${[i]}" class="info col-md-3">
                      <h3>${inventory.cars[i].make}</h3>
                      <h3>${inventory.cars[i].model}</h3>
                      <p>${inventory.cars[i].year}</p>
                      <p>${inventory.cars[i].price}</p>
                      <p id="picked${[i]}">${inventory.cars[i].description}</p>
                      </label>
                      </div>`
  }
// console.log(carsForSale)
  document.getElementById("list").innerHTML = carsForSale
}


function loadInventory (callback) {
  var inventoryLoader = new XMLHttpRequest();

  inventoryLoader.addEventListener("load", populatePage
);
  inventoryLoader.open("GET", "inventory.json")
  inventoryLoader.send()
}


function changeText() {
  var atamoton = document.getElementsByName("card")
  for (var t=0, length = atamoton.length; t < length; t++) {
    if (atamoton[t].checked){
      var userInput = document.getElementById("userInput").value;
      // document.getElementById("test").innerHTML = userInput;
      var targetText = document.getElementById(`picked${[t]}`);
      targetText.innerHTML = userInput;
      break;
    }
  }
  // console.log("test")

}


function focusing() {
  var blank =""
  document.getElementById("userInput").focus();
  document.getElementById("userInput").value = blank

  console.log("focus")
}
