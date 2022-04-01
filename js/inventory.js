
let addItem = () => {
  let itemname = document.getElementById("itemname").value;
  let category = document.getElementById("category").value;
  let quantity = document.getElementById("quantity").value;
  let rating = document.getElementById("rating").value;
  //let edit = document.getElementById("edit").value;
  //let delet = document.getElementById("delet").value;


  let iteamsTable = document.getElementById("tableId");
  let index = 1;

  let row = iteamsTable.insertRow(index);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);

  cell1.innerHTML = itemname;
  cell2.innerHTML = category;
  cell3.innerHTML = quantity;
  cell4.innerHTML = rating;
  cell5.innerHTML = edit;
  cell6.innerHTML = delet;

  document.getElementById("itemname").value ="";
  document.getElementById("category").value ="";
  document.getElementById("quantity").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("edit").value = "";
  document.getElementById("delet").value ="";

  index++;

}
