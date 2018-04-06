/*jslint browser:true*/
/*jshint esversion: 6 */

(function() {
    "use strict";
    var weather = document.getElementById('weather');
    var x = document.getElementById("geo");
    var lat = 57.677564;
    var lon = 11.98077;
    lat = lat.toFixed(2).toString();
    lon = lon.toFixed(2).toString();
    var text = "";

    var today = {};
    var nextday = {};

    let thisday = new Date();
    let dd = thisday.getDate();
    let tm = thisday.getDate()+1;
    let mm = thisday.getMonth()+1; 
    const yyyy = thisday.getFullYear();
    if(dd<10) 
    {
        dd=`0${dd}`;
    } 
    if(tm<10) 
    {
        tm=`0${tm}`;
    }
    if(mm<10) 
    {
        mm=`0${mm}`;
    } 

    var now = `${yyyy}-${mm}-${dd}`;
    var tomorrow = `${yyyy}-${mm}-${tm}`;




    function showPosition() {
        
        x.innerHTML = "Latitude: " + lat + 
        ", Longitude: " + lon + " - Mölndal";
    }

    function populatePage(obj, nr, text) {
        var getUrl = window.location;
        //var baseUrl = getUrl .protocol + "//" + getUrl.host + "/";
        //var url = baseUrl + "/img/weather/";
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
        var url = baseUrl + "/ipv6box/htdocs/cimage/img.php?src=weather/";
        var item = obj.parameters;
        var temp = 0;
        var wind = 0;
        var hour, cel;
        if (obj.validTime.slice(0, 10) == now) {
            today.date = obj.validTime.slice(0, 10);
        }
        if (obj.validTime.slice(0, 10) == tomorrow) {
            nextday.date = obj.validTime.slice(0, 10);
        }
        for (var i = 0; i < obj.parameters.length; i++) {
            if (obj.parameters[i].name == "t") {
                temp = obj.parameters[i].values;
                if (obj.validTime.slice(0, 10) == now) {
                    today["hour" + obj.validTime.slice(11, 16)] =  obj.parameters[i].values.toString();
                }
                if (obj.validTime.slice(0, 10) == tomorrow) {
                    nextday["hour" + obj.validTime.slice(11, 16)] = obj.parameters[i].values.toString();
                }
            }
            if (obj.parameters[i].name == "ws") {
                wind = obj.parameters[i].values + " " + obj.parameters[i].unit;
            }
        }

        var symb = returnImg(obj.parameters[18].values);
        text += '<div class="fourth"><span class="box weth' + nr + '">' + obj.validTime.slice(0, 10) + ' ' + obj.validTime.slice(11, 16) + '</span></div>';
        text += '<div class="fourth"><span class="box weth' + nr + '">' + temp;
        text += ' &deg;C</span></div>';
        text += '<div class="fourth"><span class="box weth' + nr + '">' + wind;
        text += '</span></div>';
        text += '<div class="fourth"><span class="box weth' + nr + '"><img src="' + url + symb + '" /></span></div>';
        text += '<div class="clearfix"></div>';
        return text;
    }


    function returnImg(nr) {
        var imgArr = ["klart.gif", "nastanklart.gif", "vaxlandemolnighet.gif",
                "halvklart.gif", "molnigt.gif", "mulet.gif", "dimma.gif", 
                "lattaregnskurar.gif", 
                "regnskurar.gif", "regn.gif", "askstorm.gif", "dimskurar.jpeg",
                "dimskurar.jpeg", "dimskurar.jpeg", "lattsnoblandat.gif",
                "lattsnofall.gif", "snofall.gif", "regnskurar.gif",
                "regnskurar.gif", "regn.gif", "aska.gif", "dimma.gif", 
                "dimma.gif", "dimma.gif", "snoblandat.gif", "snoblandat.gif",
                "snofall.gif"];
        return imgArr[nr-1];
    }

    function getAjax(lat, lon) {
        var to = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/' + lon + '/lat/' + lat + '/data.json';

        console.log(to, "\n");

        var xmlhttp = new XMLHttpRequest();
        var x, text = "";

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                document.getElementById('weather').innerHTML = myObj.approvedTime.slice(0, 10) + ' ' + myObj.approvedTime.slice(11, 16);
                var items = [];
                for (x in myObj.timeSeries) {
                    if (myObj.timeSeries[x] === undefined || myObj.timeSeries[x] == "undefined" || myObj.timeSeries[x] == null) {
                        console.log("Continue");
                        continue;
                    }
                    if (myObj.timeSeries[x] !== "undefined" && myObj.timeSeries[x] !== undefined && typeof(myObj.timeSeries[x]) !== "undefined"  && typeof(myObj.timeSeries[x]) !== undefined && typeof(myObj.timeSeries[x]) !== null) {
                        text = populatePage(myObj.timeSeries[x], x, text);
                    }
                }
            document.getElementsByClassName("flex")[0].innerHTML = text;

            getAjax2();
            }
        };
        xmlhttp.open("GET", to, true);
        xmlhttp.send();
    }


    function getAjax2() {
        var json_upload = 'json_name={"json1": [' + JSON.stringify(today) + '], "json2": [' + JSON.stringify(nextday) + ']}';

        var getUrl = window.location;
        //var url = getUrl.protocol + "//" + getUrl.host + "/scripts/json.php";
        var url = getUrl.protocol + "//" + getUrl.host + "/guni/ipv6box/htdocs/scripts/json.php";
        console.log(url, "\n");

        var xmlhttp = new XMLHttpRequest();
        var x, text = "";

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };


        xmlhttp.open("POST", url);
        //xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send(json_upload);
    }


    showPosition();
    getAjax(lat, lon);

    console.log('Sandbox is ready!');
}());
