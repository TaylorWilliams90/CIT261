var list = [];



function getlist(){
    //var list = ["Start 261 project", "finish workout", "make dinner"];

    
    var item ="";
    for (var i = 0; i < list.length; i++){
        item += "<li class='listitems'  onclick='addStyle(this)' id='" + i + "'>" + list[i] + "</li>";
    }
    document.getElementById("todoList").innerHTML = item;


}

function addItem(){
    item = document.getElementById("list-item").value;
    list.push(item);
    console.log(list);
    var item ="";
    for (var i = 0; i < list.length; i++){
        item += "<li class='listitems' onclick='addStyle(this)' id='" + i + "'>" + list[i] + "</li>";
    }
    document.getElementById("todoList").innerHTML = item;
}

   function addStyle(list){
    $(list).addClass("cross");
}