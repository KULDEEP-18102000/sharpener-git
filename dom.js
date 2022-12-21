// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // console.log(document.title=123);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// // console.log(document.all);
// // console.log(document.all[10]);
// // document.all[10]='Hello';
// console.log(document.forms[0]);
// console.log(document.links);

// console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='GoodBye';
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>hello</h3>';
headerTitle.style.border='solid 3px #000';
add_item=document.querySelector('.title');
console.log(add_item);
add_item.style.fontWeight='bold';
add_item.style.color='green';

var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
// items[1].textContent='Hello';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';

items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}