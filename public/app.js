var mainList = document.getElementById("mainList");
// function addElem() {
//     var a = document.createElement("LI");
//     var b = document.createTextNode("helloworld");
//     a.appendChild(b);
//     mainList.appendChild(a);
//     console.log(a);
// }
function addElem() {
var li = document.createElement("LI");
var b = document.createTextNode(main.value);
li.appendChild(b);


var delBtn = document.createElement("BUTTON");
var delTxt = document.createTextNode("Delete");
delBtn.appendChild(delTxt);
delBtn.setAttribute ("class","red");
delBtn.setAttribute("onclick" , "del(this)");
li.appendChild(delBtn);
var editBtn = document.createElement("BUTTON");
var editTxt = document.createTextNode("Edit");
editBtn.appendChild(editTxt);
editBtn.setAttribute ("class","red");
editBtn.setAttribute ("onclick", "edit(this)")
li.appendChild(editBtn);
mainList.appendChild(li);
console.log(li);
}
function del(element) {
element.parentNode.remove();
}
function edit(element) {
    console.log(element.parentNode);
    element.parentNode.firstChild.nodeValue = prompt();
}
function deleteAll() {
    mainList.innerHTML = "" ;
}