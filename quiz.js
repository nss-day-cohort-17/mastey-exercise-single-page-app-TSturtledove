var inventory = [];
loadInventory();

// function populatePage (inry) {
//   var inventory = JSON.parse(inry.target.responseText)
//   console.log("Inventory", inventory)
//   // Loop over the inventory and populate the page
//   var carsForSale = ""
//   for (var i = 0; i < inventory.cars.length; i++) {
//     carsForSale += `<div class="blackBor" onclick="focusing()">
//                       <input id="radio${[i]}" type="radio" name="card" value="all"><label for="radio${[i]}" class="info col-md-3">
//                       <h3>${inventory.cars[i].make}</h3>
//                       <h3>${inventory.cars[i].model}</h3>
//                       <p>${inventory.cars[i].year}</p>
//                       <p>${inventory.cars[i].price}</p>
//                       <p id="picked${[i]}">${inventory.cars[i].description}</p>
//                       </label>
//                       </div>`
//   }
// // console.log(carsForSale)
//   document.getElementById("list").innerHTML = carsForSale
// }

function populatePage (inry) {
  var inventory = JSON.parse(inry.target.responseText)
  console.log("Inventory", inventory)
  // Loop over the inventory and populate the page
  var carsForSale = '<div class="container">'
  var rowCount = 1
  carsForSale += '<div class="row">' //makes a row div
  for (var i = 0; i < inventory.cars.length; i++) {
    carsForSale += `<div class="blackBor col-md-3">
                      <h3>${inventory.cars[i].make}</h3>
                      <h3>${inventory.cars[i].model}</h3>
                      <p>${inventory.cars[i].year}</p>
                      <p>${inventory.cars[i].price}</p>
                      <p class="description">${inventory.cars[i].description}</p>
                      </div>`

    rowCount ++
    if(rowCount > 3) {
      carsForSale+= '</div>'
      carsForSale+= '<div class="row">'
      rowCount = 1
    }
  }
  carsForSale += '</div>' //for the row
  carsForSale += '</div>' //for the container
// console.log(carsForSale)
  document.getElementById("list").innerHTML = carsForSale
  activeEvents();
}

function loadInventory (callback) {
  var inventoryLoader = new XMLHttpRequest();

  inventoryLoader.addEventListener("load", populatePage
);
  inventoryLoader.open("GET", "inventory.json")
  inventoryLoader.send()
}


function resetDiv() {
  var divs = document.getElementsByClassName("blackBor");
  for (var i = 0; i < divs.length; i++) {
    let el = divs[i]
    el.style.background = null;
    el.style.border = "2px solid black";
    el.className = "blackBor col-md-3"
  }
}

function activeEvents() {
  var divs = document.getElementsByClassName("blackBor");
  for (var i = 0; i < divs.length; i++) {
    let el = divs[i]
    el.addEventListener("click", function() { changeElement(el, "#99b600")});
  }
  var textField = document.getElementById("userInput")
  textField.addEventListener("keyup", function() { updateDescription(textField.value)});

}


// function clearTextField() {
//   var textField = document.getElementById("userInput")
//   textField.value = ""
// }


function updateDescription(value) {
  var description = document.querySelectorAll("div.checked p.description")[0] //querySelectorAll returns an array, so I need to add the [0] on the end to select one
  description.innerHTML = value;
}

function changeElement(el, color) {
  resetDiv();
  focusing();
  // clearTextField();
  el.style.background = color;
  el.style.border = "5px solid black";
  el.className += " checked" //adds new class to let us focus in on it
}


function focusing() {
  var blank =""
  document.getElementById("userInput").focus();
  document.getElementById("userInput").value = blank

  console.log("focus")
}
