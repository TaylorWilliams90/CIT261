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


function loadDoc() {
    var xhttp;
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xhttp = new XMLHttpRequest();
        } else {
        // code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var jsonObj = JSON.parse(http_request.responseText);


            document.getElementById("Name").innerHTML = jsonObj.name;
            document.getElementById("Class").innerHTML = jsonObj.class;
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}