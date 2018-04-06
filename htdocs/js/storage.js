/*jslint browser:true*/
/*jshint esversion: 6 */

(function() {
    "use strict";

    var temp = document.getElementById('temp');
    var dim = document.getElementById('dim');
    var sensortemp, sensordim;
    /**
    *
    */
    function getAjax(url) {

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            makeHtml(myObj);
            //console.log(myObj[4]);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    }


    /**
    *
    */
    function makeHtml(json) {
        //console.log(json[4]);
        sensortemp = json[4];
        sensordim = json[3];
        var text = "Temperatur: " + sensortemp.state.temperature / 100 + "&deg;C";
        temp.innerHTML = text;
        var text2 = "Dimmer: " + sensordim.state.status;
        dim.innerHTML = text2;

    }


    getAjax('http://192.168.86.102/api/Xm7B9oCP7gXegVxZgxu3H5p0zXUgfDebLse0fENe/sensors');
    console.log('Sandbox is ready!');

}());
