var TermEnum = {
    AB: 1, AH: 2, AP: 3, BA: 4, BB: 5, BG: 6, BH: 7, BP: 8, LA: 9, LB: 10, LG: 11, LH: 12, LP: 13,
    PB: 14, PC: 15, PT: 16, PX: 17, RA: 18, RB: 19, RF: 20, TA: 21, TB: 22, TC: 23, TT: 24, XC: 25, XB: 26,
    properties: {
        1:{name: "AB", nozzle: 0,armor: 1, braid: 0, pt: 0, leads: 1, thole: 1},
        2:{name: "AH", nozzle: 0,armor: 1, braid: 0, pt: 0, leads: 1, thole: 2},
        3:{name: "AP", nozzle: 0,armor: 1, braid: 0, pt: 0, leads: 1, thole: 1},
        4:{name: "BA", nozzle: 1,armor: 1, braid: 1, pt: 0, leads: 1, thole: 0},
        5:{name: "BB", nozzle: 0,armor: 0, braid: 1, pt: 0, leads: 1, thole: 1},
        6:{name: "BG", nozzle: 1,armor: 0, braid: 1, pt: 0, leads: 1, thole: 0},
        7:{name: "BH", nozzle: 0,armor: 0, braid: 1, pt: 0, leads: 1, thole: 1},
        8:{name: "BP", nozzle: 0,armor: 0, braid: 1, pt: 0, leads: 1, thole: 1},
        9:{name: "LA", nozzle: 1,armor: 0, braid: 0, pt: 0, leads: 1, thole: 0},
        10:{name: "LB", nozzle: 0,armor: 0, braid: 0, pt: 0, leads: 1, thole: 1},
        11:{name: "LG", nozzle: 1,armor: 0, braid: 0, pt: 0, leads: 1, thole: 0},
        12:{name: "LH", nozzle: 0,armor: 0, braid: 0, pt: 0, leads: 1, thole: 1},
        13:{name: "LP", nozzle: 0,armor: 0, braid: 0, pt: 0, leads: 1, thole: 1},
        14:{name: "PB", nozzle: 0,armor: 0, braid: 0, pt: 1, leads: 0, thole: 2},
        15:{name: "PC", nozzle: 0,armor: 0, braid: 0, pt: 1, leads: 0, thole: 2},
        16:{name: "PT", nozzle: 0,armor: 0, braid: 0, pt: 0, leads: 1, thole: 1},
        17:{name: "PX", nozzle: 0,armor: 0, braid: 0, pt: 0, leads: 1, thole: 1},
        18:{name: "RA", nozzle: 0,armor: 1, braid: 0, pt: 0, leads: 1, thole: 1},
        19:{name: "RB", nozzle: 0,armor: 0, braid: 1, pt: 0, leads: 1, thole: 1},
        20:{name: "RF", nozzle: 0,armor: 0, braid: 0, pt: 0, leads: 1, thole: 1},
        21:{name: "TA", nozzle: 0,armor: 0, braid: 0, pt: 1, leads: 0, thole: 2},
        22:{name: "TB", nozzle: 0,armor: 0, braid: 0, pt: 1, leads: 0, thole: 2},
        23:{name: "TC", nozzle: 0,armor: 0, braid: 0, pt: 1, leads: 0, thole: 2},
        24:{name: "TT", nozzle: 0,armor: 0, braid: 0, pt: 1, leads: 0, thole: 2},
        25:{name: "XC", nozzle: 0,armor: 0, braid: 0, pt: 1, leads: 0, thole: 2},
        26:{name: "XB", nozzle: 0,armor: 0, braid: 0, pt: 1, leads: 0, thole: 2},
    }
}

//var Term = TermEnum.AB;
//var TermText = TermEnum.properties[Term].name;

// FORM AUTOMATION ELEMENTS!

//FORMAT TEXT INPUT TO SPECIFIED DECIMALS
function DecimalFormat(dec,id,val,ph) {
    if (isNaN(val) || val == "") {
        document.getElementById(id).value = "";
        document.getElementById(id).placeholder = "Re-Enter " + ph;
    } else {
        document.getElementById(id).value = parseFloat(document.getElementById(id).value).toFixed(dec);
    }
}

function segmentSelect() {
    var g1 = document.getElementById("g1");
    var g2 = document.getElementById("g2");
    var g3 = document.getElementById("g3");
    var g4 = document.getElementById("g4");
    var seg = document.getElementById("Segments");
    var selSeg = seg.options[seg.selectedIndex].value;
    switch(parseInt(selSeg)) {
        case 1:
            g1.style.visibility = "visible"; if (g1.value == "" || g1.value == 0){ g1.value = 0.38 }
            g2.style.visibility = "hidden"; g2.value = 0;
            g3.style.visibility = "hidden"; g3.value = 0;
            g4.style.visibility = "hidden"; g4.value = 0;
            break;
        case 2:
            g1.style.visibility = "visible"; if (g1.value == "" || g1.value == 0){ g1.value = 0.38 }
            g2.style.visibility = "visible"; if (g2.value == "" || g2.value == 0){ g2.value = 0.38 }
            g3.style.visibility = "hidden"; g3.value = 0;
            g4.style.visibility = "hidden"; g4.value = 0;
            break;
        case 3:
            g1.style.visibility = "visible";  if (g1.value == "" || g1.value == 0){ g1.value = 0.38 }
            g2.style.visibility = "visible"; if (g2.value == "" || g2.value == 0){ g2.value = 0.38 }
            g3.style.visibility = "visible"; if (g3.value == "" || g3.value == 0){ g3.value = 0.38 }
            g4.style.visibility = "hidden"; g4.value = 0;
            break;
        case 4:
            g1.style.visibility = "visible"; if (g1.value == "" || g1.value == 0){ g1.value = 0.38 }
            g2.style.visibility = "visible"; if (g2.value == "" || g2.value == 0){ g2.value = 0.38 }
            g3.style.visibility = "visible"; if (g3.value == "" || g3.value == 0){ g3.value = 0.38 }
            g4.style.visibility = "visible"; if (g4.value == "" || g4.value == 0){ g4.value = 0.38 }
            break;
    }
}