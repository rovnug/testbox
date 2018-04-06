/*jslint browser:true*/
/*jshint esversion: 6 */

(function() {
    "use strict";

    var temp = document.getElementById('temp');
    var res = document.getElementById('res');
    var info = document.getElementById('info');

    var utility = document.getElementById('utility');
    var utilityLink = utility;

    var agreement = document.getElementById('agreement');
    var agreed = document.getElementById('agreed');

    var green = document.getElementsByClassName('green')[0];
    var greenLink = green;
    var yellow = document.getElementsByClassName('yellow')[0];
    var yellowLink = yellow;
    var red = document.getElementsByClassName('expensive')[0];
    var redLink = red;

    var load = document.getElementsByClassName('showbox')[0];



    var sensortemp, sensordim;

    res.innerHTML = "Testvärde";
    info.innerHTML = "Info om laddläge";
    utility.innerHTML = "<q>Ditt Nätbolag</q>";
    agreement.innerHTML = "(Klicka på valt avtal)";


    function removeSquares() {
        if (greenLink.classList.contains('redsquare')) {
            greenLink.classList.remove('redsquare');
        }
        if (redLink.classList.contains('redsquare')) {
            redLink.classList.remove('redsquare');
        }
        if (yellowLink.classList.contains('redsquare')) {
            yellowLink.classList.remove('redsquare');
        }
    }


    greenLink.addEventListener("click", function () {
        console.log("Event for clicking link green.");
        agreement.innerHTML = "<q>Enkel</q>";
        agreed.innerHTML = "Du kan ladda med 16A, men om nätet är högt belastat kan vi sänka laddströmmen till en del.";
        drawSquareGreen();
    });

    function drawSquareGreen() {
        removeSquares();
        green.classList.add('redsquare');
    }

    yellowLink.addEventListener("click", function () {
        console.log("Event for clicking link yellow.");
        agreement.innerHTML = "<q>Måttlig</q>";
        agreed.innerHTML = "Du kan ladda med 16A och har möjlighet att ladda upp till 25/35A om nätet tillåter detta, men om nätet är högt belastat kan vi sänka laddströmmen till en del.";
        drawSquareYellow();
    });

    function drawSquareYellow() {
        removeSquares();
        yellow.classList.add('redsquare');
    }

    redLink.addEventListener("click", function () {
        console.log("Event for clicking link red.");
        agreement.innerHTML = "<q>Dyr</q>";
        agreed.innerHTML = "Du kan ladda med 16A och har möjlighet att ladda upp till 25/35A om möjlighet finns. Vi sänker aldrig laddströmmen för dig.";
        drawSquareRed();
    });

    function drawSquareRed() {
        removeSquares();
        red.classList.add('redsquare');
    }

    /**
    *
    */
    function getAjax() {
        var url = "";
        console.log(url);
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            //makeHtml(myObj);
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


    }


    /**
    *
    */
    function getTemp() {
        var currtemp = "5";
        var state = "";
        if (currtemp > 5) {
            console.log("Större " + currtemp);
            load.classList.add('ok');
            state = "<q>lugnt läge</q>";
        } else if (currtemp <= 5 && currtemp > 1) {
            console.log("Mellan " + currtemp);
            load.classList.add('risk');
            state = "<q>mellanrisk</q>";
        } else {
            console.log("Låg " + currtemp);
            load.classList.add('notok');
            state = "<q>kritiskt läge</q>";
        }
        temp.innerHTML = currtemp + " &deg;C, dvs " + state;
        res.innerHTML = state;
    }

    getTemp();
    getAjax();
    //getAjax('http://192.168.86.102/api/Xm7B9oCP7gXegVxZgxu3H5p0zXUgfDebLse0fENe/sensors');

    console.log('Sandbox is ready!');

}());
