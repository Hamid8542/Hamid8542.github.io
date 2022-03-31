
let addItem = () => {
  let itemname = document.getElementById("itemname").value;
  let category = document.getElementById("category").value;
  let quantity = document.getElementById("quantity").value;

  let iteamsTable = document.getElementById("tableId");
  let index = 1;

  let row = iteamsTable.insertRow(index);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  cell1.innerHTML = itemname;
  cell2.innerHTML = category;
  cell3.innerHTML = quantity;

  document.getElementById("itemname").value ="";
  document.getElementById("category").value ="";
  document.getElementById("quantity").value ="";

  index++;


}
