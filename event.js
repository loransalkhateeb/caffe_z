let div = document.getElementById("ll");
let p = document.createElement("p");

let ul = document.createElement("ul");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
let li5 = document.createElement("li");
div.appendChild(p);
div.appendChild(ul);
div.appendChild(li2);
div.appendChild(li3);
div.appendChild(li4);






let form = document.getElementById("lorans");
let label = document.createElement("label");
let input1 = document.createElement("input");
form.appendChild(label);
form.appendChild(input1);

let label2 = document.createElement("label");
let input2 = document.createElement("input");
input2.type = "number";
form.appendChild(label2);
form.appendChild(input2);

let label3 = document.createElement("label");
let input3 = document.createElement("input");
form.appendChild(label3);
form.appendChild(input3);

let label4 = document.createElement("label");
form.appendChild(label4);

let label9 = document.createElement("label");
let checkbox = document.createElement("input");
form.appendChild(label9);
form.appendChild(checkbox);
checkbox.type = "checkbox";

let label10 = document.createElement("label");
let checkbox1 = document.createElement("input");
form.appendChild(label10);
form.appendChild(checkbox1);
checkbox1.type = "checkbox";

let btn = document.createElement("button");
form.append(btn);

label.innerHTML = "name";
input1.innerHTML = `The name is +'input'`;

label2.innerHTML = "age";
input2.innerHTML = "input";

label4.innerHTML = "Drink";

label3.innerHTML = "drinkType";
input3.innerHTML = "input";


label9.innerHTML = "hots";
input3.innerHTML = "input";


label10.innerHTML = "cold";
input3.innerHTML = "input";


btn.innerText = "login";

btn.onclick = function (e) {
  p.innerHTML += input1.value;
  li2.textContent += input2.value;
  li3.textContent += input3.value;
  // li4.textContent += input4.value;
  e.preventDefault();

  if (checkbox.checked == true) {
    li4.innerHTML = "hot";
  } else if (checkbox1.checked == true) {
    li4.innerHTML = "cold";
  }
};
