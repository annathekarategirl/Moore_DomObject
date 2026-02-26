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
h1.classList.add("highlight") //googled this function
const heading=document.querySelector(".highlight")
heading.style.backgroundColor="red"
const button=document.createElement("button")
button.textContent='Add new list item'
var x=4
function getRandomColor(){

    var r=Math.random()*256;
    var g=Math.random()*256
    var b=Math.random()*256;
    return "rgb("+r+","+g+","+b+")"
    
}//learned from Mr. Justice
let c ="rgb(123,123,123)"
button.addEventListener("click",function(){var li=document.createElement("li");li.textContent="New list item "+x;x++;li.style.backgroundColor=getRandomColor();ul.append(li);})
document.body.append(button)
