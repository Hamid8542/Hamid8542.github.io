"use strict";
/*eslint-disable*/



let itemName = document.getElementById("itemId");
let category = document.getElementById("categoryId");
let quantity = document.getElementById("quantityId");
let rating = document.getElementById("ratingId");
let tableEl = document.getElementById("tableId");


let arrtable = [{itName:"Phone", category:"Iphone", quantity:1000, rating:3.5},
                {itName:"Introduction to Javascript", category:"Book", quantity:1500, rating:4},
    { itName: "Phone", category: "Samsung", quantity: 200, rating: 4.5 },
    {itName:"Apple Iphone 13", category:"Iphone", quantity:100, rating:5},];

window.onload = function () {
myDataArry(arrtable)
}


function myDataArry(arr){
    tableEl.innerHTML="";
    arr.forEach(element => {
        let rowdata = document.createElement("tr");
        rowdata.innerHTML =" <td >"
        + element.itName + "</td> <td>"
        + element.category + "</td> <td>"
        + element.quantity + "</td> <td>"
        + element.rating + "</td><td> <button onClick='editButton(this)'>Edit</button> </td></td><td> <button onclick='removeButton(this)'>Remove</button> </td></tr>";
        tableEl.append(rowdata);
        
    });
}

function removeButton(obj){
  let indexrow=  (obj.parentNode.parentNode.rowIndex) -1;
  arrtable.splice(indexrow,1);
  myDataArry(arrtable);
}
let selalltd;
function editButton(obj){
 selalltd = (obj.parentNode.parentNode.rowIndex) -1;
 itemName.value =arrtable[selalltd].itName;
 category.value = arrtable[selalltd].category;
 quantity.value = arrtable[selalltd].quantity;
 rating.value = arrtable[selalltd].rating;

}
function save() {
arrtable[selalltd].itName = itemName.value; 
arrtable[selalltd].category = category.value;
arrtable[selalltd].quantity = quantity.value;
arrtable[selalltd].rating = rating.value;
myDataArry(arrtable);

}
function add(){ 
   arrtable.push({itName: itemName.value, category: category.value, quantity: quantity.value, rating: rating.value})
   myDataArry(arrtable);
}
let selectEl = document.getElementsByName("sorted")[0];
selectEl.onchange = sortedElement;
let sortArr =[];
function sortedElement(){ 
    for(let option of selectEl.options){
        if(option.selected){
            if(option.value === "Name"){
    sortArr =arrtable.sort((a,b)=>{
        if(a.itName > b.itName){
            return 1
        }
        else if(a.itName < b.itName){
            return -1;
        }
        else{
            return 0;
        }
    })
}
else if(option.value ==="Quantity"){
    sortArr= arrtable.sort((a,b) => a.quantity - b.quantity)
}
    }
}
    myDataArry(sortArr);

    
}
 let filterEl = document.getElementsByName("filtered")[0];
 filterEl.onchange = filterByElement;

 function filterByElement(){
     for(let option of filterEl.options){
         if(option.selected){
             if(option.value === "Quantitys"){
                 sortArr = arrtable.filter(item =>
                     item.quantity > 100)
             }
             else if(option.value ==="Rating"){
                 sortArr = arrtable.filter(item => item.rating > 4 )
             }
         }
     }
     myDataArry(sortArr);
 }

itemName.onchange = itemVal;
category.onchange = categoryVal;
quantity.onchange = quantityCheck;
rating.onchange = ratingVal;
 function itemVal() {
    if (itemName.value === "") {
        itemName.style.backgroundColor = "red";
        alert("Please Enter an Item Name");
        return;
    }
}

function categoryVal() {
    if (category.value === "") {
        category.style.backgroundColor = "red";
        alert("Please Enter Category ");
        return;
    }
}
function quantityCheck() {
    let newQty = quantity.value;
    if (isNaN(newQty)) {
        quantity.className = "quantity-alert";
        alert("Quantity must be a Number")
        return;
    }
    else if (newQty === "") {
        quantity.className = "quantity-alert";
        alert("Quantity must not be Empty")
        return;
    }


}
function ratingVal() {
    // let newrating = rating.value;
    if (isNaN(rating.value)) {
        rating.style.backgroundColor = "red";
        alert("rating must be a number");
        return;
    }
    else if (rating.value === "") {
        rating.className = "quantity-alert";
        alert("Rating must not be Empty")
        return;
    }
}