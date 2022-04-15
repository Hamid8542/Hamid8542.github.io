
// 1. Write a recursive function that will print “name: value” to the console for every node in the
// following tree data structure. Then write an iterative function that also does this. The following is
// the output you should have for the recursive version. The iterative version should be similar, but it
// is not necessary for every line to be in the same order.
// body: null
// div: null
// label: Name
// input: this was typed by a user
// p: This is text in the a paragraph

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};

// Part III
// Use the Simpsons code given below to generate a small tree data structure, TreeNode.
// Write recursive functions for the following:
// 1. Log to the console the names of everyone in the tree.

// Question3
// Given a target value, return the subtree with the found node or null if no match. Extend the
// tree to have a more interesting test. Create a mocha test to run at least 2 or 3 tests on your
// tree.
// findSubtree(tree, “Homer”) → subtree with Homer as the root

let nodeObj = {
    name: "Abe",
    children: [{
        name: "Homer",
        children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]
    }]
};

function printName(node) {
    if (Array.isArray(node.children)) {
        console.log(node.name);
        for (let element of node.children) {
            printName(element);
        }

    } else {

        console.log(node.name);
    }
}
console.log(printName(nodeObj));


function findName(node, target){
   if(node.name == target){
       return true;
   }
   else if(Array.isArray(node.children)){
       for(let element of node.children){
           return contains(element, target)
       }
   }
   else{
       return false;
   }
}
console.log(findName(nodeObj, "John"));

// Question4
// Create a new constructor function ListNode (based on TreeNode below) and use it to generate a
// linked list of Abe, Homer, Bart, Lisa, Maggie instead of a tree.

function ListNode(name) {
    this.name = name;
    this.next = null;
}

const maggie = new ListNode("Maggie");
console.log(maggie);
const lisa = new ListNode("Lisa");
lisa.next = maggie;
const bart = new ListNode("Bart");
bart.next = lisa;
const homer = new ListNode("Homer");
homer.next = bart;
const abe = new ListNode("Abe");
abe.next = homer;


//question 5
// Given a target value in the list, return the node that contains the target value or null if no match.
// findListNode(list, “Bart")

function findListNode(list, target){
    let listCont = null;
    if(list.next == null){
        if(list.name == target){
            listCont = list;
        }
    
    else{
        listCont = findListNode(list.next, target);
  }
}
return listCont
}

console.log(findListNode(abe, "lisa"));
 

//Question 7
// Write a recursive function, treeCollector(tree) that will walk the tree and collect the values of
// each node into an array [“Abe”, “Homer”, “Bart”, “Lisa”, “Maggie”] for this tree. You may want
// to use an accumulator variable that is external to the function to hold the values.


function treeCollector(tree) {
    let arr =[];
    if(tree.children == null){
       arr = arr.concat(tree.name);
    }
    else{
        arr = arr.concat(tree.name);
        for(let sub of tree.children){
            arr = arr.concat(treeCollector(sub));
        }
    }
    return arr;
}
console.log(treeCollector(nodeObj));
