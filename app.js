var list = [];



function getlist(){
    //var list = ["Start 261 project", "finish workout", "make dinner"];

    var item ="";
    for (var i = 0; i < list.length; i++){
        item += "<li class='listitems'  onclick='addStyle(this)' id='list'>" + list[i] + "</li>";
    }
    document.getElementById("todoList").innerHTML = item;


    $.getJSON("/data.json", function(result){
        $.each(result, function(i, field){
          $("#example").append(field + " <br/> ");
        });
      });
}

function addItem(){
    item = document.getElementById("list-item").value;
    list.push(item);
    console.log(list);
    var item ="";
    for (var i = 0; i < list.length; i++){
        item += "<li class='listitems' onclick='addStyle(this)' id='list'>" + list[i] + "</li>";
    }
    document.getElementById("todoList").innerHTML = item;
}

   function addStyle(list){
    $(list).addClass("cross");
}


var xmlhttp = new XMLHttpRequest();
var url = "data.json";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myjson = JSON.parse(this.responseText);
    myFunction(myjson);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(myjson) {
  var out = myjson.name + "<br/>" + myjson.class;
  document.getElementById("example").innerHTML = out;
}