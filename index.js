function doe() { //The single funtion to run the funtionallity of all the buttons
    var x = document.getElementById("add").value; //Grabs the values or the data when the button Add is clicked 
    var node = document.createElement("Li"); //Creats a lists and assigns it to variable node
    var textnode=document.createElement("Button"); //

    var text = document.getElementById("user_input").value; 
    textnode.innerHTML = text ;
 
    node.appendChild(textnode);
    document.getElementById("list_item").appendChild(node);
    
    textnode.addEventListener("click", ()=>{
        textnode.innerHTML = "<b>" + text + "</b>"
        
    })

    var clear = document.getElementById("clear")
    clear.addEventListener("click", ()=>{
        if(textnode.innerHTML == "<b>" + text + "</b>"){
            node.remove();
        }
    })

    var emptylist = document.getElementById("Empty")
    emptylist.addEventListener("click", ()=>{
        node.remove()
    })


}