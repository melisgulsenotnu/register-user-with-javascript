var itemPerPage = 5;

function getRowCount() {
  return document.querySelectorAll("tr:not(.table-head)").length;
}

function getPageCount() {
  var rowCount = getRowCount();
  var pageCount = parseInt(rowCount / itemPerPage);

  if (rowCount % itemPerPage != 0) {
    pageCount++;
  }

  return pageCount;
}

function handleClick() {
  addRow();
  display(getPageCount());
  pagination();
}

function addRow() {
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var age = document.getElementById("age").value;
  var isStudent = document.getElementById("isstudent").checked;

  if (firstName && lastName && age) {
    var table = document.getElementById("register");
    var row = table.insertRow(getRowCount() + 1);

    var cellOne = row.insertCell(0);
    var cellTwo = row.insertCell(1);
    var cellThree = row.insertCell(2);
    var cellFour = row.insertCell(3);
    var cellFive = row.insertCell(4);

    cellOne.innerHTML = firstName;
    cellTwo.innerHTML = lastName;
    cellThree.innerHTML = age;
    cellFour.innerHTML = getCheckBoxTex(isStudent);
    cellFive.innerHTML =
      '<button onclick="removeButton(' +
      getRowCount() +
      ')" type="button" name="delete">Delete</button>';
  }
}

function getCheckBoxTex(val) {
  if (val) {
    return "yes";
  } else {
    return "no";
  }
}

function display(pageNumber) {
  var array = document.querySelectorAll("tr:not(.table-head)");
  console.log(pageNumber);
  for (var index = 0; index < array.length; index++) {
    var element = array[index];

    if (
      pageNumber * itemPerPage - itemPerPage <= index &&
      index < itemPerPage * pageNumber
    ) {
      element.style.display = "table-row";
    } else {
      element.style.display = "none";
    }
  }
}

function pagination() {
  var container = document.getElementById("page-numbers");
  var pageCount = getPageCount();
  var buttonHtml = "";

  for (var index = 1; index < pageCount + 1; index++) {
    buttonHtml +=
      '<button onclick="display(' +
      index +
      ');" type="button">' +
      index +
      "</button>";
  }

  container.innerHTML = buttonHtml;
}

//TO-DO
function removeButton(rowNumber) {
  document.getElementById("register").deleteRow(rowNumber);
  rowNumber--;
  // array[rowNumber - 1].remove();
  display(1);
  pagination();
}
