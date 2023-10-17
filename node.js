//FIRSTELEMENTCHILD//
/*console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='Hello';*/

////LastELEMENTCHILD//
/*console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='Hello 4';*/

//nextSIBILING//
//console.log(itemlist.nextSibling);
//console.log(itemlist.nextElementSibling);

//PREVIOUS SIBLING//
/*console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color='green';*/

/*//CREATE A DIV//
var newDiv=docume//TRAVERSING THE DOM//
var itemlist=document.querySelector('#items');
//PARENT NODE//
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor="#f4f4f4";
//console.log(itemlist.parentNode.parentNode);

//PARENT ELEMENT//
/*console.log(itemlist.parentElement);
//itemlist.parentElement.style.backgroundColor="#f4f4f4";
//console.log(itemlist.parentElement.parentElement);*/

//CHILD NODES//
//console.log(itemlist.childNodes);
/*console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor='green';*/

var newDiv=document.createElement('div');
//add class
newDiv.className='hello';
//add id
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode('Hello world');
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);

//FIRSTCHILD//
//console.log(itemlist.firstChild);


var newDiv2=document.createElement('div');
//add class
newDiv2.className='hello-div';
//add id
newDiv2.id='hello-div1';
newDiv2.setAttribute('title','Hello-Div');
var newDivText1=document.createTextNode('Hello world');
newDiv2.appendChild(newDivText1);
console.log(newDiv2);

var container=document.querySelector('.list-group');
var h2=document.querySelector('ul li');
container.insertBefore(newDiv2, h2);
