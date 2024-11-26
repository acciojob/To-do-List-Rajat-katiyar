//your code here

// Get references to the input field, button, and todo list
const input = document.getElementById("newTodoInput");
const addButton = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

// Function to add a new todo item
function addTodo() {
  // Get the value from the input
  const newTodo = input.value.trim();

  // Validate that the input is not empty
  if (newTodo === "") {
    alert("Todo cannot be empty!");
    return;
  }

  // Create a new list item
  const listItem = document.createElement("li");
  listItem.textContent = newTodo;

  // Add the list item to the ordered list
  todoList.appendChild(listItem);

  // Clear the input field
  input.value = "";
}

// Attach the click event to the button
addButton.addEventListener("click", addTodo);
