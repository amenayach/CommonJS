var nw = [];

nw.blink = function (ctrlSelector, CSSPropStr, secondColor, blinkTimes, origColor) {

    var blinkSelf = this;
    blinkSelf.__Blink = function() {

        var self = this;
        var el = jQuery(ctrlSelector);

        self.doBlink = function () {

            if (CSSPropStr == null) {
                CSSPropStr = "color"
            }

            if (origColor == null) {
                origColor = el.css(CSSPropStr);
            }

            if(!blinkTimes) {
                blinkTimes = 8;
            }

            el.css(CSSPropStr, (blinkTimes % 2 == 0 ? secondColor : origColor));
            
            blinkTimes -= 1;

            if (blinkTimes > 0)
                setTimeout(function () { self.doBlink(); }, 400);
            else {
                el.css({ targetCss: origColor });
            }
        };

        self.doBlink();
    }

    new blinkSelf.__Blink();
}

//Usage: nw.blink('#tb1', 'background-color', 'orange', 8, 'white')
//         nw.blink('#tb1', 'background-color', 'orange')