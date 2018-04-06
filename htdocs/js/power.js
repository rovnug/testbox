/*jslint browser:true*/
/*jshint esversion: 6 */
(function() {
    "use strict";

    function getAjax(file, where, arg = null) {
        var extra = "";
        if (arg.length > 0) { 
            extra = "?";
        }
        for (var i = 0; i < arg.length; i += 1) {
            console.log(arg[i]);
            extra += "q" + (i+1) + "=" + arg[i] + "&";
        }
        var getUrl = window.location;
        //var url = getUrl.protocol + "//" + getUrl.host + "/scripts/";
        var url = getUrl.protocol + "//" + getUrl.host + "/guni/ipv6box/htdocs/";
        var to = url + file + extra.slice(0,-1);
        console.log(to);

        var xmlhttp = new XMLHttpRequest();
        var x, text = "<br />";

        xmlhttp.onreadystatechange = function() {
        console.log(this.responseText);
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            console.log(this.responseText);
            for (x in myObj) {
                if (myObj[x] === undefined || myObj[x] == "undefined" || myObj[x] == null) {
                console.log("Continue");
                continue;
                }
                if (myObj[x] !== "undefined" && myObj[x] !== undefined && typeof(myObj[x]) !== "undefined"  && typeof(myObj[x]) !== undefined && typeof(myObj[x]) !== null) {
                    console.log(myObj[x], x);
                    text += "<span class='red'>" + x + ": " + myObj[x] + "</span>";
                    document.getElementById(x).innerHTML = text;
                }
            }
        }
    };
    xmlhttp.open("GET", to, true);
    xmlhttp.send();
    }

    var args = [];
    getAjax("power.php", "power", args);

    console.log('Sandbox is ready!');
}());
