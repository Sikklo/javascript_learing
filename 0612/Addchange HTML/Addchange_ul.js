const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";


// const banana = document.getElementById("banana");

// document.getElementById("fruits").insertBefore(newListItem, banana);

const items = document.querySelectorAll("#fruits li");

document.getElementById("fruits").insertBefore(newListItem, items[1]);
