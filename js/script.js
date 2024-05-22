function calculateArea() {
    var height = parseFloat(document.getElementById("height").value);
    var base = parseFloat(document.getElementById("base").value);
    var area = 0.5 * base * height;
    document.getElementById("result").innerHTML = "Luas: " + area.toFixed(2) + " cm<sup>2</sup>";
}

function calculatePerimeter() {
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);
    var perimeter = side1 + side2 + side3;
    document.getElementById("result").innerHTML = "Keliling: " + perimeter.toFixed(2) + " cm";
}

function toggleArea() {
    document.getElementById("areaInput").style.display = "block";
    document.getElementById("perimeterInput").style.display = "none";
    document.getElementById("result").innerHTML = "";
}

function togglePerimeter() {
    document.getElementById("perimeterInput").style.display = "block";
    document.getElementById("areaInput").style.display = "none";
    document.getElementById("result").innerHTML = "";
}
