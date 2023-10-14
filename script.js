let selectedRow = null;

function onFormSubmit() {
  let formData = readFormData();
  if (selectedRow == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
}

function readFormData() {
  let formData = {};
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["age"] = document.getElementById("age").value;
  formData["eMail"] = document.getElementById("eMail").value;
  formData["gender"] = document.querySelector(
    'input[name="gender"]:checked'
  ).value;

  return formData;
}

function insertNewRecord(data) {
  let table = document
    .getElementById("clientRows")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);

  cell1 = newRow.insertCell(0);
  cell1.setAttribute("data-label", "First Name");
  cell1.innerHTML = data.firstName;

  cell2 = newRow.insertCell(1);
  cell2.setAttribute("data-label", "Last Name");
  cell2.innerHTML = data.lastName;

  cell3 = newRow.insertCell(2);
  cell3.setAttribute("data-label", "Age");
  cell3.innerHTML = data.age;

  cell4 = newRow.insertCell(3);
  cell4.setAttribute("data-label", "Email");
  cell4.innerHTML = data.eMail;

  cell5 = newRow.insertCell(4);
  cell5.setAttribute("data-label", "Gender");
  cell5.innerHTML = data.gender;

  cell6 = newRow.insertCell(5);
  cell6.setAttribute("data-label", "Actions");
  cell6.innerHTML = `<a onClick="onEdit(this)" href="#scrollToForm" class="action-btn btn-update">Update</a>
            <a onClick="onDelete(this)" class="action-btn btn-delete">Delete</a>`;
}

function resetForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("eMail").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("age").value = selectedRow.cells[2].innerHTML;
  document.getElementById("eMail").value = selectedRow.cells[3].innerHTML;

  // Get the gender value from the selected row
  let gender = selectedRow.cells[4].innerHTML;

  // Check the appropriate radio button based on the gender value
  if (gender === "Male") {
    document.getElementById("dot-1").checked = true;
  } else if (gender === "Female") {
    document.getElementById("dot-2").checked = true;
  } else if (gender === "Other") {
    document.getElementById("dot-3").checked = true;
  }
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.firstName;
  selectedRow.cells[1].innerHTML = formData.lastName;
  selectedRow.cells[2].innerHTML = formData.age;
  selectedRow.cells[3].innerHTML = formData.eMail;
  selectedRow.cells[4].innerHTML = formData.gender;
}

function onDelete(td) {
  row = td.parentElement.parentElement;
  document.getElementById("clientRows").deleteRow(row.rowIndex);
  resetForm();
}

function dummyData() {
  const staticData = [
    {
      firstName: "John",
      lastName: "Mark",
      age: "30",
      eMail: "johnmark@gmail.com",
      gender: "Male",
    },
    {
      firstName: "Mohan",
      lastName: "Patel",
      age: "25",
      eMail: "mohan.p@gmail.com",
      gender: "Male",
    },
    {
      firstName: "Riya",
      lastName: "Domadiya",
      age: "21",
      eMail: "riya.domadiya@yahoo.com",
      gender: "Female",
    },
    {
      firstName: "Vivek",
      lastName: "Vasoya",
      age: "28",
      eMail: "vivekpatel4@yahoo.com",
      gender: "Male",
    },
  ];

  // Insert the static data into the table
  for (const data of staticData) {
    insertNewRecord(data);
  }
}
