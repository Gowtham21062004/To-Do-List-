// var letter=document.getElementById("letter").value;
// var res=document.getElementById("res");
function add(){
    var letter=document.getElementById("letter").value;
    var res=document.getElementById("res");
    var c=document.createElement("p")
    c.innerHTML=letter +  "      " + "      " +   "<button onclick='remove(event)'>Remove</button>"
    res.append(c)
}
function remove(event){
       event.target.parentElement.remove()
}