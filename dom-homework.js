const h1=document.createElement("h1")
h1.textContent="Welcome to DOM homework"
const myDiv=document.getElementById("myDiv")
myDiv.append(h1)
const p=document.createElement("p")
p.textContent="This is your first DOM homework"
myDiv.append(p)
const ul=document.createElement("ul")
myDiv.append(ul)
const l1=document.createElement("li")
l1.textContent="one"
const l2=document.createElement("li")
l2.textContent="two"
const l3=document.createElement("li")
l3.textContent="three"
ul.append(l1,l2,l3)
h1.classList.add("highlight")