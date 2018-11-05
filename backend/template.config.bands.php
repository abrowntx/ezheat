

<div class="ContentWrapper2" style="width:100%;margin:0 auto;">
    
    <div style="display:grid;grid-template-columns:1fr 750px 200px 200px 1fr;grid-template-areas:'. d1 d2 d3 .';">
        <div style="grid-area: d1;margin:0 auto;">
        <div style="font-size:28px;font-weight:bold;margin:0 auto;width:400px;">Mica Band Heater Configurator</div>
            <canvas id="myCanvas" width="680px" height="680px" style="">
            Your browser does not support the HTML5 canvas tag.</canvas>
        </div>
        <div style="grid-area: d2">
            <form action="">
                <span style="font-weight:bold">General Information:</span><br>
                <input id="Diameter" class="txtinput" type="text" placeholder="Diameter" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder); CheckBaseSpec();"><br>
                <input id="Width" class="txtinput" type="text" placeholder="Width" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder); CheckBaseSpec();"><br>
                <input id="Watts" class="txtinput" type="text" placeholder="Watts" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder); CheckBaseSpec();"><br>
                <input id="Volts" class="txtinput" type="text" placeholder="Volts" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder); CheckBaseSpec();"><br>
                <span style="font-weight:bold">Segments:&nbsp;</span>
                <select id="Segments" class="selector_short">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select><br>
                <input id="Gap1" type="text" value="0.38" class="txtinput_short">
                <input id="Gap2" type="text" value="0.00" class="txtinput_short"><br>
                <input id="Gap3" type="text" value="0.00" class="txtinput_short">
                <input id="Gap4" type="text" value="0.00" class="txtinput_short"><br>
                <span style="font-weight:bold">Lockup Style:&nbsp;</span><br>
                <select id="Lockup" class="selector">
                    <option value="C">Clamps</option>
                    <option value="CL">Latch & Trunion</option>
                    <option value="F">Flange</option>
                    <option value="S">Strap</option>
                    <option value="N">No Lockup Mechanism</option>
                </select><br>
                <span style="font-weight:bold">Strap Style:&nbsp;</span>
                <select id="Lockup" class="selector">
                    <option value="None">None</option>
                    <option value="Full">Full Coverage</option>
                    <option value="Minimal">Minimal</option>
                    <option value="Nozzle">Low Profile Nozzle</option>
                </select>
                <span style="font-weight:bold">Termination Style:&nbsp;</span>
                <select id="Termination" class="selector">
                    <option value="AB">Armor Leads</option>
                    <option value="BB">Braid Leads</option>
                    <option value="LB">Plain Leads</option>
                    <option value="TB">Post Term (TB)</option>
                    <option value="TC">Post Term (TC)</option>
                </select>
                <span style="font-weight:bold">Termination Adders:</span>
                <select id="TermAdders" class="selector">
                    <option value="LP">Low Profile Lead Box</option>
                    <option value="X">Post Terminal Box</option>
                    <option value="StrainA">Style A Strain Relief</option>
                    <option value="StrainB">Style B Strain Relief</option>
                    <option value="StrainC">Vertical Strain Relief</option>
                </select>
            </form>
            <form action="">
                <input type="button" class="btnWide" value="Configure" onclick="BaseSpec(); Draw();"><br>
                <input type="button" class="btnWide" value="Clear Form" onlcick="Clear();">
            </form>
        </div>
        <div style="grid-area: d3">
            <span style="font-weight:bold">Holes:</span><br>
            <form action="">
                <input id="h1" type="text" class="txtinput" placeholder="Hole 1 Size" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder)"><br>
                <input id="h1d" type="text" class="txtinput" placeholder="Hole 1 Degree" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder)"><br>
                <input id="h2" type="text" class="txtinput" placeholder="Hole 2 Size" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder)"><br>
                <input id="h2d" type="text" class="txtinput" placeholder="Hole 2 Degree" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder)"><br>
                <input id="h3" type="text" class="txtinput" placeholder="Hole 3 Size" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder)"><br>
                <input id="h3d" type="text" class="txtinput" placeholder="Hole 3 Degree" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder)"><br>
                <input id="h4" type="text" class="txtinput" placeholder="Hole 4 Size" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder)"><br>
                <input id="h4d" type="text" class="txtinput" placeholder="Hole 4 Degree" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder)"><br>
            </form>
        </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 250px 250px 250px 250px 1fr;grid-template-areas:'. g1 g2 g3 g4 .';color:#8C9EAC;">
        <div style="grid-area:g1">
            <br>
            <span style="font-weight:bold">Surface Area: </span><span id="surfArea"></span><br>
            <span style="font-weight:bold">Watt Density: </span><span id="wsi"></span><br>
            <span style="font-weight:bold">Amperage: </span><span id="amps"></span><br>
            <span style="font-weight:bold">Dia BS: </span><span id="diabs"></span><br>
            <span style="font-weight:bold">Wid BS: </span><span id="widbs"></span><br>
            <span style="font-weight:bold">Wat BS: </span><span id="watbs"></span><br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
        </div>  
        <div style="grid-area:g2">
            <br>
            <span style="font-weight:bold">Hole #1 Size: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Hole #2 Size: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Hole #3 Size: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Hole #4 Size: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Hole #1 Loc: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Hole #2 Loc: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Hole #3 Loc: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Hole #4 Loc: </span><span id="ampbs"></span><br>
        </div>
        <div style="grid-area:g3">
            <br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
        </div>
        <div style="grid-area:g4">
            <br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
            <span style="font-weight:bold">Amp BS: </span><span id="ampbs"></span><br>
        </div>
    </div>


    <script>


</script> 
</div>