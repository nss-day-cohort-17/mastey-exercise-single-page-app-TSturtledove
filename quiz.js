var inventory = [];
loadInventory();

function populatePage (inventory) {
  var cars = JSON.parse(inventory.target.responseText)
  console.log("cars", cars)
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  // activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
function event(){
  loadInventory(populatePage);
}


function loadInventory (callback) {
  var inventoryLoader = new XMLHttpRequest();

  inventoryLoader.addEventListener("load", populatePage
  //function () {

//  }
);
  inventoryLoader.open("GET", "inventory.json")
  inventoryLoader.send()
}
