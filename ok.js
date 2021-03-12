// document.getElementById("ok").onclick = okayClick; // null
// function okClick(){alert(" You clicked ok!! " ) } 

const { reset } = require("../../../../AppData/Local/Programs/Microsoft VS Code/resources/app/out/vs/loader");

// called when page loads; sets up event handlers

function pageLoad() {
    document.getElementById("ok").onclick = okClick;}

function okClick() {
    alert(" You clicked ok!!");
    const okButton = document.getElementById("ok");
    okButton.className = "fancy";
    setTimeout(reset, 3000);
}


 window.onload = pageLoad; // onload is a browser event

 
 
//  function okayClick() {
//     const okButton = document.getElementById("ok");
   
//     okButton.className = "highlighted";
//     }

//     .highlighted { color: red; }