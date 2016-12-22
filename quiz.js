var inventory = [];
loadInventory();

function populatePage (inry) {
  var inventory = JSON.parse(inry.target.responseText)
  console.log("Inventory", inventory)
  // Loop over the inventory and populate the page
  var carsForSale = ""
  for (var i = 0; i < inventory.cars.length; i++) {
    carsForSale += `<div class="col-md-3 blackBor">
                      <input class="col-md-3" id="radio${[i]}" type="radio" name="card" value="all"><label for="radio${[i]}">
                      <h3>${inventory.cars[i].make}</h3>
                      <h3>${inventory.cars[i].model}</h3>
                      <p>${inventory.cars[i].year}</p>
                      <p>${inventory.cars[i].price}</p>
                      <p>${inventory.cars[i].description}</p>
                      </label>
                      </div>`
  }
// console.log(carsForSale)
  document.getElementById("list").innerHTML = carsForSale

  // Now that the DOM is loaded, establish all the event listeners needed
  // activateEvents();

  //add the eventlistener for click on the cards in here so
  //things are loaded before you target and change stuff
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
function event(){
  // loadInventory(populatePage);
}


//--Use callback to call the event function when the loadInventory
// --function is call at th beginning of the page
function loadInventory (callback) {
  var inventoryLoader = new XMLHttpRequest();

  inventoryLoader.addEventListener("load", populatePage
  //function () {

//  }
);
  inventoryLoader.open("GET", "inventory.json")
  inventoryLoader.send()
}
