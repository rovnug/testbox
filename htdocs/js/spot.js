/*jslint browser:true*/
/*jshint esversion: 6 */

(function() {
    "use strict";

    
    var areacode = "SEK3";
    var day, now, tomorrow, hoursToday, hoursTomorrow, dateToday, dateTomorrow, averageToday, averageTomorrow;
    
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    const yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd=`0${dd}`;
    } 

    if(mm<10) 
    {
        mm=`0${mm}`;
    } 

    now = `${dd}.${mm}.${yyyy}`;


    /**
    *
    */
    function getAjax(file) {
        var getUrl = window.location;
        var url = getUrl.protocol + "//" + getUrl.host + "/guni/ipv6box/htdocs/scripts/" + file;

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            newFunction(this.responseText);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    }


    /**
    *
    */
    function newFunction(item) {
        var arrayOfLines = item.match(/[^\r\n]+/g);
        arrayOfLines.forEach(findChosen);
    }


    /**
    *
    */
    function findChosen(line, index) {
        if (line.includes("SE3") && line.includes("SEK")) {
            if (line.includes(now)) {
                day = "today";
                makePrices(line);
                averageToday = hoursToday[24];
            } else {
                day = "tomorrow";
                makePrices(line);
                averageTomorrow = hoursTomorrow[24];
            }
        }
    }


    /**
    *
    */
    function makePrices(str) {
        var array = str.split(";");
        if (day == "today") {
            hoursToday = array.slice(8, 33);
            hoursToday.forEach(removeCommas, day);
            dateToday = array[5];
        } else {
            hoursTomorrow = array.slice(8, 33);
            hoursTomorrow.forEach(removeCommas, day);
            dateTomorrow = array[5];
        }
    }


    /**
    *
    */
    function removeCommas(hour, index) {
        hour = hour.replace(",", "");
        hour = parseFloat(hour) / 1000;
        hour = parseFloat(hour.toFixed(1));
        if (isNaN(hour)) {
            hour = 0;
        }
        if (day == "today") {
            hoursToday[index] = hour;
        } else {
            hoursTomorrow[index] = hour;
        }
        
    }

    getAjax('spotprice.txt');
    getAjax('spotprice2.txt');


    /**
    *
    */
    window.onload = function() {

        var todaysDate = dateToday;
        var todayArray = hoursToday;

        var tomorrowsDate = dateTomorrow;
        var tomorrowArray = hoursTomorrow;

        var extra = {};

        var summertimeToday = {x: 3, y: todayArray[2]};
        if (hoursToday[3] > 0) {
            console.log(hoursToday[3], "ja");
            summertimeToday = {x: 2, y: todayArray[2]};
            extra = {x: 3, y: todayArray[3]};
        }
        var summertimeTomorrow = {x: 3, y: tomorrowArray[2]};
        if (hoursTomorrow[3] > 0) {
            summertimeTomorrow = {x: 2, y: tomorrowArray[2]};
            extra = {x: 3, y: tomorrowArray[3]};
        }
        if (hoursToday[2] == 0) {
            summertimeToday = {x: 3, y: todayArray[2]};
        }
        if (hoursTomorrow[2] == 0) {
            summertimeTomorrow = {};
        }

            CanvasJS.addColorSet("myColors",
                    [
                        "#99C9CC",
                        "orange",
                        "#9BBB58",
                        "#2E8B57",
                        "#3CB371",
                        "#90EE90",
                        "#008080",
                        "#2F4F4F"
                    ]);
                    
            var chart2 = new CanvasJS.Chart("chartContainer2",
                    {
                        colorSet: "myColors",
                        zoomEnabled: false,
                        title: {
                            fontColor: "#2f4f4f",
                            fontSize: 30,
                            padding: 10,
                            margin: 15,
                            fontFamily: "comic sans ms",
                            fontWeight: "bold",
                            verticalAlign: "top", 
                            horizontalAlign: "center" 

                        },
                        axisY: {
                            valueFormatString: "0 öre", 
                            maximum: 100,
                            minimum: 0,
                            interval: 10,     
                            tickColor: "#D7D7D7",
                            title: "Pris",
                            titleFontFamily: "comic sans ms",
                            titleFontColor: "steelBlue",
                            lineThickness: 3
                        },
                        theme: "theme2",
                        legend: {
                            verticalAlign: "top",
                            horizontalAlign: "right",
                            fontSize: 15,
                            fontFamily: "tamoha",
                            fontColor: "Sienna",
                        },
                        data: [
                            {
                                type: "line",
                                lineThickness: 3,
                                showInLegend: false,
                                name: todaysDate,
                                dataPoints: [
                                    {x: 1, y: todayArray[0]},
                                    {x: 2, y: todayArray[1]},
                                    summertimeToday,
                                    extra,
                                    {x: 4, y: todayArray[4]},
                                    {x: 5, y: todayArray[5]},
                                    {x: 6, y: todayArray[6]},
                                    {x: 7, y: todayArray[7]},
                                    {x: 8, y: todayArray[8]},
                                    {x: 9, y: todayArray[9]},
                                    {x: 10, y: todayArray[10]},
                                    {x: 11, y: todayArray[11]},
                                    {x: 12, y: todayArray[12]},
                                    {x: 13, y: todayArray[13]},
                                    {x: 14, y: todayArray[14]},
                                    {x: 15, y: todayArray[15]},
                                    {x: 16, y: todayArray[16]},
                                    {x: 17, y: todayArray[17]},
                                    {x: 18, y: todayArray[18]},
                                    {x: 19, y: todayArray[19]},
                                    {x: 20, y: todayArray[20]},
                                    {x: 21, y: todayArray[21]},
                                    {x: 22, y: todayArray[22]},
                                    {x: 23, y: todayArray[23]},
                                    {x: 24, y: todayArray[24]}
                                ]
                            },
                            {
                                type: "line",
                                lineThickness: 3,
                                showInLegend: false,
                                name: tomorrowsDate,
                                dataPoints: [
                                    {x: 1, y: tomorrowArray[0]},
                                    {x: 2, y: tomorrowArray[1]},
                                    summertimeTomorrow,
                                    extra,
                                    {x: 4, y: tomorrowArray[4]},
                                    {x: 5, y: tomorrowArray[5]},
                                    {x: 6, y: tomorrowArray[6]},
                                    {x: 7, y: tomorrowArray[7]},
                                    {x: 8, y: tomorrowArray[8]},
                                    {x: 9, y: tomorrowArray[9]},
                                    {x: 10, y: tomorrowArray[10]},
                                    {x: 11, y: tomorrowArray[11]},
                                    {x: 12, y: tomorrowArray[12]},
                                    {x: 13, y: tomorrowArray[13]},
                                    {x: 14, y: tomorrowArray[14]},
                                    {x: 15, y: tomorrowArray[15]},
                                    {x: 16, y: tomorrowArray[16]},
                                    {x: 17, y: tomorrowArray[17]},
                                    {x: 18, y: tomorrowArray[18]},
                                    {x: 19, y: tomorrowArray[19]},
                                    {x: 20, y: tomorrowArray[20]},
                                    {x: 21, y: tomorrowArray[21]},
                                    {x: 22, y: tomorrowArray[22]},
                                    {x: 23, y: tomorrowArray[23]},
                                    {x: 24, y: tomorrowArray[24]}
                                ]
                            },
                        ]
                    });
                chart2.render();
            };


    console.log('Sandbox is ready!');

}());
