

<div class="ContentWrapper2">
    <div style="display:grid;grid-template-columns:830px 200px 200px;grid-template-areas:'d1 d2 d3';">
        <div style="grid-area:d1">
            <canvas id="myCanvas" width="800" height="600" style="border:1px solid #d3d3d3;background:white;">
            Your browser does not support the HTML5 canvas tag.</canvas>
        </div>
        <div style="grid-area:d2">
            <form action="">
                <span>General Information:</span><br>
                <input id="Diameter" type="text" placeholder="Diameter" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder); BaseSpec()"><br>
                <input id="Width" type="text" placeholder="Width" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder); BaseSpec()"><br>
                <input id="Watts" type="text" placeholder="Watts" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder); BaseSpec()"><br>
                <input id="Volts" type="text" placeholder="Volts" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder); BaseSpec()"><br>
                <select name="" id="">
                    <option value="C">Clamps</option>
                    <option value="CL">Latch & Trunion</option>
                    <option value="F">Flange</option>
                    <option value="S">Strap</option>
                    <option value="N">No Lockup Mechanism</option>
                </select>
            </form>
        </div>
        <div classw="d3">
            <span>Holes:</span><br>
            <form action="">
                <input id="h1" type="text" placeholder="Hole 1 Size" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder)"><br>
                <input id="h1d" type="text" placeholder="Hole 1 Degree" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder)"><br>
                <input id="h2" type="text" placeholder="Hole 2 Size" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder)"><br>
                <input id="h2d" type="text" placeholder="Hole 2 Degree" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder)"><br>
                <input id="h3" type="text" placeholder="Hole 3 Size" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder)"><br>
                <input id="h3d" type="text" placeholder="Hole 3 Degree" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder)"><br>
                <input id="h4" type="text" placeholder="Hole 4 Size" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder)"><br>
                <input id="h4d" type="text" placeholder="Hole 4 Degree" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder)"><br>
            </form>
        </div>
    </div>
    <div>
        <form action="">
            <input type="button" value="Configure">
            <input type="button" value="Clear Form"><br>
            <span>Surface Area: </span><span id="surfArea"></span><br>
            <span>Watt Density: </span><span id="wsi"></span><br>
            <span>Amperage: </span><span id="amps"></span><br>
            <span>Dia BS: </span><span id="diabs"></span><br>
            <span>Wid BS: </span><span id="widbs"></span><br>
            <span>Wat BS: </span><span id="watbs"></span><br>
            <span>Amp BS: </span><span id="ampbs"></span><br>
        </form>
    </div>
    <div>
        <form action="">
            <input type="button" value="sdfasdf"><br>
        </form>
    </div>


    <script>


</script> 
</div>