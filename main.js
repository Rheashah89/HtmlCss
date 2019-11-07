function Age(){
    var age= document.getElementById("age").value;
    var date= new Date();
    var currentYear = date.getFullYear();
    var year = currentYear-age;
    document.getElementById("year").value= year;
}

function Year(){
    var year = document.getElementById("year").value;
    var date = new Date();
    var currentYear = date.getFullYear();
    var age = currentYear-year;
    document.getElementById("age").value=age;
}