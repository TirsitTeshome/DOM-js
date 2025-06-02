
// 1
document.body.style.backgroundColor = "silver";

// 2
document.getElementById("title").style.color = "green";

// 3
const h3 = document.querySelectorAll("h3");
h3.forEach(function(h3) {
    h3.style.textTransform = "uppercase";
});

// 4
const fruitList = document.getElementById("fruList");
const newFruit = document.createElement("li");
newFruit.textContent = "Pineapples"; 
fruitList.appendChild(newFruit);

// 5
const vegList = document.getElementById("vegList");
const newVeg = document.createElement("li");
newVeg.textContent = "Broccoli"; 
vegList.appendChild(newVeg);
