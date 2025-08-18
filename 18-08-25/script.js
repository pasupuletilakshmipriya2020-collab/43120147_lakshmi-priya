document.getElementById("employeeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const position = document.getElementById("position").value;

  // Create a new row
  const table = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.insertCell(0).innerText = name;
  newRow.insertCell(1).innerText = age;
  newRow.insertCell(2).innerText = position;

  // Clear input fields
  document.getElementById("employeeForm").reset();
});