// ADD NEW ITEM TO END OF LIST
var creamNode = document.createElement('li');
creamNode.appendChild(document.createTextNode('cream'));
document.querySelector('ul').appendChild(creamNode);

// ADD NEW ITEM START OF LIST
var kaleNode = document.createElement('li');
kaleNode.appendChild(document.createTextNode('kale'));
document.querySelector('ul').prepend(kaleNode);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var list = document.getElementsByTagName('li');
for(var i = 0; i < list.length; i++) {
  list[i].setAttribute('class', 'cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var listLength = list.length;
document.getElementsByTagName('h2')[0].innerHTML = "Buy groceries " + listLength;
