// Get references to input box and list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!"); // Alert if the input box is empty
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerText = inputBox.value; // Set the text of the list item to the input value

        // Create a new span element for the close button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode character for multiplication sign (×)
        li.appendChild(span); // Add the span to the list item

        listContainer.appendChild(li); // Add the list item to the list container
    }

    inputBox.value = ''; // Clear the input box
    saveData(); // Save the current list to local storage
}

// Event listener for click events on the list container
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle the 'checked' class when an item is clicked
        saveData(); // Save the current list to local storage
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the list item when the close button is clicked
        saveData(); // Save the updated list to local storage
    }
}, false);

// Function to save the current list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load tasks from local storage and display them
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load tasks when the page is loaded
showTask();
