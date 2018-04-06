/*jslint browser:true*/
(function() {
    "use strict";
    var six = document.getElementsByClassName('sixamp');
    var sixLink = six[0];
    var ten = document.getElementsByClassName('tenamp');
    var tenLink = ten[0];
    var sixteen = document.getElementsByClassName('sixteenamp');
    var sixteenLink = sixteen[0];
    var twenty = document.getElementsByClassName('twentyamp');
    var twentyLink = twenty[0];
    var twentyfive = document.getElementsByClassName('twentyfiveamp');
    var twentyfiveLink = twentyfive[0];
    var thirtytwo = document.getElementsByClassName('thirtytwoamp');
    var thirtytwoLink = thirtytwo[0];

    var manual = document.getElementsByClassName('manual');
    var manualLink = manual[0];
    var utility = document.getElementsByClassName('utility');
    var utilityLink = utility[0];

    var report1 = document.getElementsByClassName('report1');
    var report1Link = report1[0];
    var report2 = document.getElementsByClassName('report2');
    var report2Link = report2[0];
    var report3 = document.getElementsByClassName('report3');
    var report3Link = report3[0];
    var report100 = document.getElementsByClassName('report100');
    var report100Link = report100[0];
    var report110 = document.getElementsByClassName('report110');
    var report110Link = report110[0];
    var setenergy10 = document.getElementsByClassName('setenergy10');
    var setenergy10Link = setenergy10[0];

    var setenergy0 = document.getElementsByClassName('setenergy0');
    var setenergy0Link = setenergy0[0];
    var ena0 = document.getElementsByClassName('ena0');
    var ena0Link = ena0[0];
    var ena1 = document.getElementsByClassName('ena1');
    var ena1Link = ena1[0];
    var dummy1 = document.getElementsByClassName('dummy1');
    var dummy1Link = dummy1[0];
    var dummy2 = document.getElementsByClassName('dummy2');
    var dummy2Link = dummy2[0];
    var dummy3 = document.getElementsByClassName('dummy3');
    var dummy3Link = dummy3[0];

    emptyElements();
    removeSquares();

    function removeSquares() {
        if (sixLink.classList.contains('redsquare')) {
            sixLink.classList.remove('redsquare');
        }
        if (tenLink.classList.contains('redsquare')) {
            tenLink.classList.remove('redsquare');
        }
        if (sixteenLink.classList.contains('redsquare')) {
            sixteenLink.classList.remove('redsquare');
        }
        if (twentyLink.classList.contains('redsquare')) {
            twentyLink.classList.remove('redsquare');
        }
        if (twentyfiveLink.classList.contains('redsquare')) {
            twentyfiveLink.classList.remove('redsquare');
        }
        if (thirtytwoLink.classList.contains('redsquare')) {
            thirtytwoLink.classList.remove('redsquare');
        }
        if (report1Link.classList.contains('redsquare')) {
            report1Link.classList.remove('redsquare');
        }
        if (report2Link.classList.contains('redsquare')) {
            report2Link.classList.remove('redsquare');
        }
        if (report3Link.classList.contains('redsquare')) {
            report3Link.classList.remove('redsquare');
        }
        if (report100Link.classList.contains('redsquare')) {
            report100Link.classList.remove('redsquare');
        }
        if (report110Link.classList.contains('redsquare')) {
            report110Link.classList.remove('redsquare');
        }
        if (setenergy10Link.classList.contains('redsquare')) {
            setenergy10Link.classList.remove('redsquare');
        }
        if (setenergy0Link.classList.contains('redsquare')) {
            setenergy0Link.classList.remove('redsquare');
        }
        if (ena0Link.classList.contains('redsquare')) {
            ena0Link.classList.remove('redsquare');
        }
        if (ena1Link.classList.contains('redsquare')) {
            ena1Link.classList.remove('redsquare');
        }
        if (dummy1Link.classList.contains('redsquare')) {
            dummy1Link.classList.remove('redsquare');
        }
        if (dummy2Link.classList.contains('redsquare')) {
            dummy2Link.classList.remove('redsquare');
        }
        if (dummy3Link.classList.contains('redsquare')) {
            dummy3Link.classList.remove('redsquare');
        }
    }


    function emptyElements() {
        document.getElementById("result").innerHTML = "";
    }


    function drawSquareManual() {
        utilityLink.classList.remove('redsquare');
        removeSquares();
        manualLink.classList.add('redsquare');
    }


    function drawSquareUtility() {
        manualLink.classList.remove('redsquare');
        removeSquares();
        utilityLink.classList.add('redsquare');
    }


    function drawSquareSix() {
        removeSquares();
        sixLink.classList.add('redsquare');
    }


    function drawSquareTen() {
        removeSquares();
        tenLink.classList.add('redsquare');
    }

    function drawSquareSixteen() {
        removeSquares();
        sixteenLink.classList.add('redsquare');
    }

    function drawSquareTwenty() {
        removeSquares();
        twentyLink.classList.add('redsquare');
    }

    function drawSquareTwentyfive() {
        removeSquares();
        twentyfiveLink.classList.add('redsquare');
    }

    function drawSquareThirtytwo() {
        removeSquares();
        thirtytwoLink.classList.add('redsquare');
    }


    function drawSquareReport1() {
        removeSquares();
        report1Link.classList.add('redsquare');
    }

    function drawSquareReport2() {
        removeSquares();
        report2Link.classList.add('redsquare');
    }

    function drawSquareReport3() {
        removeSquares();
        report3Link.classList.add('redsquare');
    }

    function drawSquareReport100() {
        removeSquares();
        report100Link.classList.add('redsquare');
    }

    function drawSquareReport110() {
        removeSquares();
        report110Link.classList.add('redsquare');
    }

    function drawSquareSetenergy10() {
        removeSquares();
        setenergy10Link.classList.add('redsquare');
    }

    function drawSquareSetenergy0() {
        removeSquares();
        setenergy0Link.classList.add('redsquare');
    }

    function drawSquareEna0() {
        removeSquares();
        ena0Link.classList.add('redsquare');
    }

    function drawSquareEna1() {
        removeSquares();
        ena1Link.classList.add('redsquare');
    }

    function drawSquareDummy1() {
        removeSquares();
        dummy1Link.classList.add('redsquare');
    }

    function drawSquareDummy2() {
        removeSquares();
        dummy2Link.classList.add('redsquare');
    }

    function drawSquareDummy3() {
        removeSquares();
        dummy3Link.classList.add('redsquare');
    }

    sixLink.addEventListener("click", function () {
        console.log("Event for clicking link Six.");
        var args = ["curr", "6000", "yes"];
        getAjax("test.php", "", args);
        emptyElements();
        drawSquareSix();
    });


    tenLink.addEventListener("click", function () {
        console.log("Event for clicking link Ten.");
        var args = ["curr", "10000", "yes"];
        getAjax("test.php", "", args);
        emptyElements();
        drawSquareTen();
    });

    sixteenLink.addEventListener("click", function () {
        console.log("Event for clicking link Sixteen.");
        var args = ["curr", "13000", "yes"];
        getAjax("test.php", "", args);
        emptyElements();
        drawSquareSixteen();
    });

    twentyLink.addEventListener("click", function () {
        console.log("Event for clicking link Twenty.");
        var args = ["curr", "20000", "yes"];
        //getAjax("test.php", "", args);
        document.getElementById("result").innerHTML = "Du valde 20A";
        emptyElements();
        drawSquareTwenty();
    });

    twentyfiveLink.addEventListener("click", function () {
        console.log("Event for clicking link Twentyfive.");
        var args = ["curr", "25000", "yes"];
        //getAjax("test.php", "", args);
        document.getElementById("result").innerHTML = "Du valde 25A";
        emptyElements();
        drawSquareTwentyfive();
    });

    thirtytwoLink.addEventListener("click", function () {
        console.log("Event for clicking link Thirtytwo.");
        var args = ["curr", "32000", "yes"];
        //getAjax("test.php", "", args);
        document.getElementById("result").innerHTML = "Du valde 32A";
        emptyElements();
        drawSquareThirtytwo();
    });


    manualLink.addEventListener("click", function () {
        console.log("Event for clicking link Manual.");
        var args = [];
        //getAjax("test.php", "", args);
        document.getElementById("result").innerHTML = "Du valde inte styrning";
        emptyElements();
        drawSquareManual();
    });

    utilityLink.addEventListener("click", function () {
        console.log("Event for clicking link Utility.");
        var args = [];
        //getAjax("test.php", "", args);
        document.getElementById("result").innerHTML = "Du valde styrning";
        emptyElements();
        drawSquareUtility();
    });

    report1Link.addEventListener("click", function () {
        console.log("Event for clicking link report1.");
        var args = ["report", "1"];
        getAjax("test.php", "", args);
        emptyElements();
        drawSquareReport1();
    });

    report2Link.addEventListener("click", function () {
        console.log("Event for clicking link report2.");
        var args = ["report", "2"];
        getAjax("test.php", "", args);
        emptyElements();
        drawSquareReport2();
    });

    report3Link.addEventListener("click", function () {
        console.log("Event for clicking link report3.");
        var args = ["report", "3"];
        getAjax("test.php", "", args);
        emptyElements();
        drawSquareReport3();
    });

    report100Link.addEventListener("click", function () {
        console.log("Event for clicking link report100.");
        var args = ["report", "100"];
        getAjax("test.php", "", args);
        emptyElements();
        drawSquareReport100();
    });

    report110Link.addEventListener("click", function () {
        console.log("Event for clicking link report110.");
        var args = ["report", "110"];
        getAjax("test.php", "", args);
        emptyElements();
        drawSquareReport110();
    });

    setenergy10Link.addEventListener("click", function () {
        console.log("Event for clicking link setenergy10.");
        var args = ["setenergy", "10000", "yes"];
        getAjax("test.php", "", args);
        emptyElements();
        drawSquareSetenergy10();
    });

    setenergy0Link.addEventListener("click", function () {
        console.log("Event for clicking link setenergy0.");
        var args = ["setenergy", "0", "yes"];
        getAjax("test.php", "", args);
        emptyElements();
        drawSquareSetenergy0();
    });

    ena0Link.addEventListener("click", function () {
        console.log("Event for clicking link ena0.");
        var args = ["ena", "0", "yes"];
        getAjax("test.php", "", args);
        emptyElements();
        drawSquareEna0();
    });

    ena1Link.addEventListener("click", function () {
        console.log("Event for clicking link ena1.");
        var args = ["ena", "1", "yes"];
        getAjax("test.php", "", args);
        emptyElements();
        drawSquareEna1();
    });

    dummy1Link.addEventListener("click", function () {
        console.log("Event for clicking link dummy1.");
        var args = [];
        //getAjax("test.php", "", args);
        emptyElements();
        drawSquareDummy1();
    });

    dummy2Link.addEventListener("click", function () {
        console.log("Event for clicking link dummy2.");
        var args = [];
        //getAjax("test.php", "", args);
        emptyElements();
        drawSquareDummy2();
    });

    dummy3Link.addEventListener("click", function () {
        console.log("Event for clicking link dummy3.");
        var args = [];
        //getAjax("test.php", "", args);
        emptyElements();
        drawSquareDummy3();
    });


    function getAjax(file, where, arg=null) {
        var extra = "";
        if (arg.length > 0) { extra = "?";}
        for (var i = 0; i < arg.length; i += 1) {
            console.log(arg[i]);
            extra += "q" + (i+1) + "=" + arg[i] + "&";
        }

        var getUrl = window.location;
        var url = getUrl.protocol + "//" + getUrl.host + "/js/python/";

        var to = url + file + extra.slice(0, -1);
        console.log(to);

        var xmlhttp = new XMLHttpRequest();
        var x; 
        var text = "<br />";
/*
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
                    if (myObj[x] !== "undefined" && myObj[x] !== undefined && typeof(myObj[x]) !== "undefined" && typeof(myObj[x]) !== undefined && typeof(myObj[x]) !== null) {
                        console.log(myObj[x], x);
                        if (x == "Curr user") {
                            text += "<span class='red'>" + x + ": " + myObj[x] + " | </span>";
                        } else if (x == "Laddström") {
                            text += "<span class='red'>" + x + ": " + myObj[x] + "</span>";
                        } else {
                            text += x + ": " + myObj[x] + " | ";
                        }
                    }
                }
                document.getElementById("result").innerHTML = text;
            }*
        }
        xmlhttp.open("GET", to, true);
        xmlhttp.send();*/
    }

    console.log('Sandbox is ready!');

}());
