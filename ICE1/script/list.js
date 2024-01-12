// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
var groceryList = document.getElementById("groceries");

// ADD NEW ITEM TO END OF LIST
// Create element
const newEndListItem = document.createElement("li");
// Create text node
const EndlistItemContent = document.createTextNode("New Item at End");
// Add text node to element
newEndListItem.appendChild(EndlistItemContent);
// Add element end of list
groceryList.appendChild(newEndListItem);

// ADD NEW ITEM START OF LIST
// Create element
const newStartListItem = document.createElement("li");
// Create text node
const StartlistItemContent = document.createTextNode("New Item at Start");
// Add text node to element
newStartListItem.appendChild(StartlistItemContent);
// Add element to start of list
groceryList.insertBefore(newStartListItem, groceryList.firstChild);

// All <li> elements
var ListItems = document.querySelectorAll("li");

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Loop through elements
for (var i = 0; i < ListItems.length; i++) {
    // Change class to cool
    ListItems[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
var contentSubhead = document.getElementById("contentSubhead");
// No. of <li> elements
var noOfItems = ListItems.length;
// Content
var Content = contentSubhead.innerHTML;
// Update h2 using innerHTML (not textContent) because it contains markup
contentSubhead.innerHTML = Content + ' <span ="numberitems">' + noOfItems + '</span>';
