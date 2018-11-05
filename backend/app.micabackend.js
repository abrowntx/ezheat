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
    var diabs = 0; var widbs = 0; var watbs = 0; var ampbs = 0;
//Check the inputs of the base line genspec form entry
    if (isNaN(document.getElementById("Diameter").value) || document.getElementById("Diameter").value == "")
    { document.getElementById("diabs").innerHTML = "0"; diabs = 0; } else { document.getElementById("diabs").innerHTML = "1"; diabs = 1; }
    if (isNaN(document.getElementById("Width").value) || document.getElementById("Width").value == "")
    { document.getElementById("widbs").innerHTML = "0"; widbs = 0; } else { document.getElementById("widbs").innerHTML = "1"; widbs = 1; }
    if (isNaN(document.getElementById("Watts").value) || document.getElementById("Watts").value == "")
    { document.getElementById("watbs").innerHTML = "0"; watbs = 0; } else { document.getElementById("watbs").innerHTML = "1"; watbs = 1; }
    if (isNaN(document.getElementById("Volts").value) || document.getElementById("Volts").value == "")
    { document.getElementById("ampbs").innerHTML = "0"; ampbs = 0; } else { document.getElementById("ampbs").innerHTML = "1"; ampbs = 1; }

//Check the baseline spec true/false status
    if (diabs + widbs + watbs + ampbs == 4) {
        BaseSpec();
    }
}

function BaseSpec(){
//Define variables from the user input form for base calcs
    var Dia = parseFloat(document.getElementById("Diameter").value);
    var Wid = parseFloat(document.getElementById("Width").value);
    var Wat = parseFloat(document.getElementById("Watts").value);
    var Vol = parseFloat(document.getElementById("Volts").value);

    document.getElementById("surfArea").innerHTML = Dia * Math.PI * Wid;
    document.getElementById("wsi").innerHTML = Wat / (Dia * Math.PI * Wid);
    document.getElementById("amps").innerHTML = Wat / Vol;
}

document.addEventListener('DOMContentLoaded',domloaded,false);
    function domloaded(){    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(125, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();  // your code here.
}
