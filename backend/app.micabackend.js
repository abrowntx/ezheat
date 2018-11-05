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

//SET THE VARIABLES FOR IMG URL STRINGS FOR DRAWING THE HEATERS!
//heater body
var onepc = "config_img/1pc.png";
var twopc = "config_img/2pc.png";
var threepc = "config_img/3pc.png";
var fourpc = "config_img/4pc.png";
//clamping
var clamp = "config_img/C.png";

function Draw() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    //draw initial heater body
    var seg = document.getElementById("Segments");
    var selSeg = seg.options[seg.selectedIndex].value;
    if (selSeg == 1) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        var htrBody = new Image();
        htrBody.onload = function() { context.drawImage(this, 0, 0); }
        htrBody.src = onepc;
    }
    if (selSeg == 2) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        var htrBody = new Image();
        htrBody.onload = function() { context.drawImage(this, 0, 0); }
        htrBody.src = twopc;
    }
    if (selSeg == 3) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        var htrBody = new Image();
        htrBody.onload = function() { context.drawImage(this, 0, 0); }
        htrBody.src = threepc;
    }
    if (selSeg == 4) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        var htrBody = new Image();
        htrBody.onload = function() { context.drawImage(this, 0, 0); }
        htrBody.src = fourpc;
    }

    //draw clamping mechanisms
    var lock = document.getElementById("Lockup");
    var selLock = lock.options[lock.selectedIndex].value;
    var lockupImg = new Image();
    var lockupImg2 = new Image();
    var lockupImg3 = new Image();
    var lockupImg4 = new Image();
    lockupImg.src = "";
    seg = document.getElementById("Segments").value;
    sep = 360/seg;
    lockupImg.src = clamp; lockupImg2.src = clamp; lockupImg3.src = clamp, lockupImg4.src = clamp;
    lockupImg.onload = function() { context.drawImage(lockupImg, 0, 0); }
    if (seg == 2) {
        lockupImg2.onload = function() { 
            context.save();
            context.translate(338, 338);
            context.rotate(180 * Math.PI / 180);
            context.translate(-338,-338);
            context.drawImage(lockupImg2, 0, 0);
            context.restore(); } }
    if (seg == 3) {
        lockupImg2.onload = function() { 
            context.save();
            context.translate(338, 338);
            context.rotate(120 * Math.PI / 180);
            context.translate(-338,-338);
            context.drawImage(lockupImg2, 0, 0);
            context.restore(); }
        lockupImg3.onload = function() { 
            context.save();
            context.translate(338, 338);
            context.rotate(240 * Math.PI / 180);
            context.translate(-338,-338);
            context.drawImage(lockupImg3, 0, 0);
            context.restore(); } }
    if (seg == 4) {
        lockupImg2.onload = function() { 
            context.save();
            context.translate(338, 338);
            context.rotate(90 * Math.PI / 180);
            context.translate(-338,-338);
            context.drawImage(lockupImg2, 0, 0);
            context.restore(); }
        lockupImg3.onload = function() { 
            context.save();
            context.translate(338, 338);
            context.rotate(180 * Math.PI / 180);
            context.translate(-338,-338);
            context.drawImage(lockupImg3, 0, 0);
            context.restore(); }
        lockupImg4.onload = function() { 
            context.save();
            context.translate(338, 338);
            context.rotate(270 * Math.PI / 180);
            context.translate(-338,-338);
            context.drawImage(lockupImg4, 0, 0);
            context.restore(); } }
                
        
    if (selLock == "F") {
        lockupImg.src = "";
        lockupImg.onload = function() { context.drawImage(this, 0, 0); }
        lockupImg.src = flange;
    }

}



function Clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
