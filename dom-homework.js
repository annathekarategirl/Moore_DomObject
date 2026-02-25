const h1=document.createElement("h1")
h1.textContent="Welcome to DOM homework"
const myDiv=document.getElementById("myDiv")
myDiv.append(h1)
const p=document.createElement("p")
p.textContent="This is your first DOM homework"
myDiv.append(p)