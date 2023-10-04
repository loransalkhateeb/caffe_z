const name=prompt("Please enter the name:")
const gender=prompt("Please enter the gender male or female:")
const age=prompt("Please enter the Age:")
const drink_name=prompt("Please enter the drink name:")

const div=document.createElement('div');

div.setAttribute('id','main');

const p=document.createElement('p');

p.textContent=`User details`
const ul=document.createElement('ul');
const txt=document.createTextNode("Lorans Alkhateeb");

const li1=document.createElement('li')
li1.textContent=`name:${name}`
const li2=document.createElement('li')
li2.textContent=`age:${age}`
const li3=document.createElement('li')
li3.textContent=`drink_name:${drink_name}`

div.appendChild(p);
p.appendChild(txt);
p.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);


document.body.appendChild(div)

