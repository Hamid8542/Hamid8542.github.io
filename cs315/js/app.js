// Inventory Constructors

function Inventory(itemname, itemcategory, quantity){
  this.itemname = itemname;
  this.itemcategory = itemcategory;
  this.quantity = quantity;
}
//UI Constructors

function UI(){}

UI.prototype.addInventoryToList = function(inventory){
  console.log(inventory);
  const list = document.getElementById("inventory-list");
  // Create tr element 
  const row = document.createElement("tr");

  //insert cols
  row.innerHTML = `
  <td>${inventory.itemname}</td>
  <td>${inventory.itemcategory}</td>
  <td>${inventory.quantity}</td>
  <td><a href = "#" class = "delete">X</a></td>
`;
  list.appendChild(row);

}
// Clear Fields
UI.prototype.clearFields = function(){
  document.getElementById("itemname").value = "";
  document.getElementById("itecategory").value = "";
  document.getElementById("quantity").value = "";
}
//Event Listeners

document.getElementById("inventory-form").addEventListener("add",
function(){
console.log("test");
// Get form values
  const itemname = document.getElementById("itemname").value,
        itemcategory = document.getElementById("itemcategory").value,
        quantity = document.getElementById("quantity").value
        
         // Instantiate inventory
        const inventory = new Inventory(itemname, itemcategory, quantity);

       const ui = new UI();
       console.log(ui);

      // Add book to inventory list
      UI.addInventoryToList(inventory);
       // console.log(inventory);
 //Clear fields
  ui.clearFields();

//e.preventDefault();
});