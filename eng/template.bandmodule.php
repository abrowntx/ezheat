
<div class="ContentWrapper">
    <div></div>
    <div>
        <span style="font-weight:bold;">General Info:</span>
        <form action="">
            <input id="Diameter" type="text" placeholder="Diameter" class="txtinput_short" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder);">
            <input id="Width" type="text" placeholder="Width" class="txtinput_short" onfocusout="DecimalFormat(2,this.id,this.value,this.placeholder);"><br>
            <input id="Watts" type="text" placeholder="Watts" class="txtinput_short" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder);">
            <input id="Volts" type="text" placeholder="Volts" class="txtinput_short" onfocusout="DecimalFormat(0,this.id,this.value,this.placeholder);"><br>
        <span style="font-weight:bold;">Segments:</span><br>
            <select name="" id="Segments" class="selector" onchange="segmentSelect()">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select><br>
            <input id="g1" type="text" value="0.38" placeholder="Gap1" class="txtinput_short">
            <input id="g2" type="text" placeholder="Gap2" class="txtinput_short" style="visibility:hidden"><br>
            <input id="g3" type="text" placeholder="Gap3" class="txtinput_short" style="visibility:hidden">
            <input id="g4" type="text" placeholder="Gap4" class="txtinput_short" style="visibility:hidden"><br>

        <span style="font-weight:bold;">Lockup Style</span><br>
            <select name="Lockup" id="" class="selector">
                <option value="1">Built-in</option>
                <option value="2">Strap</option>
                <option value="3">None</option>
            </select><br>
        <span style="font-weight:bold;">Mechanism:</span><br>
            <select name="Mechanism" id="" class="selector">
                <option value="1">Clamps</option>
                <option value="2">Latch & Trunion</option>
                <option value="3">Flange</option>
            </select><br>
        <span style="font-weight:bold;">Adder:</span><br>
            <select name="Adder" id="" class="selector">
                <option value="0">None</option>
                <option value="1">Spring-Loaded</option>
                <option value="2">Low Profile</option>
                <option value="3">Large Barrel Nut</option>
                <option value="4">Extra Large Barrel Nut</option>
            </select><br>
        </form>


    </div>
    <div>
        <form action="">
            <input type="text" placeholder="Diameter">
            <input type="text" placeholder="Width">
            <input type="text" placeholder="Watts">
            <input type="text" placeholder="Volts">
        </form>
    </div>
    <div>
        <form action="">
            <input type="text" placeholder="Diameter">
            <input type="text" placeholder="Width">
            <input type="text" placeholder="Watts">
            <input type="text" placeholder="Volts">
        </form>
    </div>
    <div>
        <form action="">
            <input type="text" placeholder="Diameter">
            <input type="text" placeholder="Width">
            <input type="text" placeholder="Watts">
            <input type="text" placeholder="Volts">
        </form>
    </div>
    <div>
        <form action="">
            <input type="text" placeholder="Diameter">
            <input type="text" placeholder="Width">
            <input type="text" placeholder="Watts">
            <input type="text" placeholder="Volts">
        </form>
    </div>
</div>