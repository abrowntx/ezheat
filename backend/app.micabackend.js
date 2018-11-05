//FORMAT TEXT INPUT TO SPECIFIED DECIMALS
function DecimalFormat(dec,id,val,ph) {
    if (isNaN(val) || val == "") {
        document.getElementById(id).value = "";
        document.getElementById(id).placeholder = "Re-Enter " + ph;
    } else {
        document.getElementById(id).value = parseFloat(document.getElementById(id).value).toFixed(dec);
    }
}

function CheckBaseSpec(){
    if (isNaN(document.getElementById("Diameter").value) || document.getElementById("Diameter").value == "")
    { document.getElementById("diabs").innerHTML = "0" } else { document.getElementById("diabs").innerHTML = "1" }
    if (isNaN(document.getElementById("Width").value) || document.getElementById("Width").value == "")
    { document.getElementById("widbs").innerHTML = "0" } else { document.getElementById("widbs").innerHTML = "1" }
    if (isNaN(document.getElementById("Watts").value) || document.getElementById("Watts").value == "")
    { document.getElementById("watbs").innerHTML = "0" } else { document.getElementById("watbs").innerHTML = "1" }
    if (isNaN(document.getElementById("Volts").value) || document.getElementById("Volts").value == "")
    { document.getElementById("ampbs").innerHTML = "0" } else { document.getElementById("ampbs").innerHTML = "1" }
}

function BaseSpec(){
    if(isNaN(document.getElementById("Diameter").value) || isNaN(document.getElementById("Width").value) ||
    isNaN(document.getElementById("Watts").value) || isNaN(document.getElementById("Volts")) || 
    document.getElementById("Diameter").value == "" || document.getElementById("Width").value == "" ||
    document.getElementById("Watts").value == "" || document.getElementById("Volts").value == ""){
        return;
    } else {
        document.getElementById("surfArea").innerHTML = (document.getElementById("Width").value * document.getElementById("Diameter").value).toFixed(2);
    }
}

document.addEventListener('DOMContentLoaded',domloaded,false);
    function domloaded(){    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(125, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();  // your code here.
}
