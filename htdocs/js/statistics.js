/*jslint browser:true*/
/*jshint esversion: 6 */

(function() {
    "use strict";

    var res = document.getElementById('res');
    var data = document.getElementById('data');
    var month = [];
    var temp = [];
    var temps = [];
    var sorted = [];
    var justTemps = [];
    var kwh;
    var x = 0;
    var day;
    var datatext = "";
    var monthlength = 0;


    /**
    *
    */
    function getAjax(file) {
        var getUrl = window.location;
        //var url = getUrl.protocol + "//" + getUrl.host + "/scripts/" + file;
        var url = getUrl.protocol + "//" + getUrl.host + "/guni/ipv6box/htdocs/scripts/" + file;
        //console.log(url);
        monthlength = 28;
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            extractValues(this.responseText);
            //console.log(this.responseText);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    }


    /**
    *
    */
    function getAjax2(file) {
        var getUrl = window.location;
        //var url = getUrl.protocol + "//" + getUrl.host + "/scripts/" + file;
        var url = getUrl.protocol + "//" + getUrl.host + "/guni/ipv6box/htdocs/scripts/" + file;
        //console.log(url);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            extractValues2(this.responseText);
            //console.log(this.responseText);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    }

    /**
    *
    */
    function extractValues(res) {
        var arrayOfLines = res.match(/[^\r\n]+/g);
        arrayOfLines.forEach(findChosen);
        month.forEach(makeDayList);
        temp.forEach(makeObjects);
        x = 0;
        getAjax2('SMHI_4.csv');
    }


    /**
    *
    */
    function extractValues2(res) {
        var arrayOfLines = res.match(/[^\r\n]+/g);
        arrayOfLines.forEach(findChosen2);
        sortTemps();
        sorted.forEach(makeDay2List);
        makeTableData();
        makeCals();
    }


    /**
    *
    */
    function findChosen(line, index) {
        if (line.match(/^\d/) && line.match(/[a-z]/i) == null) {
            month[x] = line;
            x += 1;
        }
    }


    /**
    *
    */
    function findChosen2(line, index) {
        if (line.startsWith("2018-02")) {
            temps[x] = line;
            x += 1;
        }
    }



    /**
    *
    */
    function sortTemps() {
        var theday;
        sorted = [];

        for (var c = 0; c < monthlength; c++) {
            theday = c < 9 ? '0' + (c+1) : c + 1;
            for (var i = 0; i < temps.length; i++) {
                if (temps[i].startsWith('2018-02-'+theday)) {
                    sorted[c] += "|" + temps[i];
                }
            }
        }
    }



    /**
    *
    */
    function makeDayList(line, index) {
        var array = line.split(",");
        temp[index] = makeObjects(array);
    }


    /**
    *
    */
    function makeDay2List(line, index) {
        var ct = 0;
        var array = line.split("|");
        makeObjects2(array, index);
    }



    /**
    *
    */
    function makeObjects(item, index) {
        var day = {};
        day.day = item[0];
        for (var i = 1; i < item.length-1; i++) {
            if (item[i] == "undefined") {
                continue;
            } else {
                day[i-1] = {"kwh": item[i]};
            }
        }
        day.total = item[item.length-1];
        return day;
    }



    /**
    *
    */
    function makeObjects2(item, index) {
        for (var i = 0; i < item.length; i++) {
            if (item[i] == "undefined") {
                continue;
            }
            var array = item[i].split(";");
            temp[index][i-1].cel = array[2];
            justTemps.push(array[2]);
        }
    }



    /**
    *
    */
    function populateList(item, index) {
                var temptext = "";
        var ind = 0;
        var allTemps = [];
        var allKwhs = [];
        for (const [key, value] of Object.entries(item)) {
            if (key == "day" || key == "total") {continue;}
            temptext += '<tr><td>' + ind + '</td><td>' + value.kwh;
            temptext += '</td><td>' + value.cel + '</td></tr>';
            ind += 1;
            allKwhs.push(value.kwh);
            allTemps.push(value.cel);
        }
        allTemps = allTemps.sort(function(a,b) { return a - b;});
        allKwhs = allKwhs.sort(function(a,b) { return a - b;});
        console.log(allTemps, allKwhs);
        datatext += '<tr><td>Dag: ' + item.day + '</td><td>Totalt: ' + item.total  + '</td><td>Kallast: ' + allTemps[0] + '</td></tr>';
        datatext += '<tr><td>Lägst kwh: ' + allKwhs[0] + '</td><td>Högst kwh: ' + allKwhs[allKwhs.length - 2]  + '</td><td>Varmast: ' + allTemps[allTemps.length - 1] + '</td></tr>';
        datatext += temptext;
    }



    /**
    *
    */
    function makeCals() {
        console.log("Cal");
    }


    function makeTableData() {
        temp.forEach(populateList);
        var text = '<table class ="fixed"><caption>Text</caption><thead>';
        text += '<tr><th>Timme</th>';
        text += '<th>kWh</th><th>&deg;C</th></tr></thead><tbody>';
        text += datatext;
        text += '</tbody></table>';
        data.innerHTML = text;

        res.innerHTML = "Februari 2018";
    }

    getAjax('rapport.csv');
    console.log('Sandbox is ready!');

}());
