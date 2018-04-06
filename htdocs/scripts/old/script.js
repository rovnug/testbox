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

    emptyElements();
    removeSquares();

    function removeSquares() {
        sixLink.classList.remove('redsquare');
        tenLink.classList.remove('redsquare');
        sixteenLink.classList.remove('redsquare');
        twentyLink.classList.remove('redsquare');
        twentyfiveLink.classList.remove('redsquare');
        thirtytwoLink.classList.remove('redsquare');
	report1Link.classList.remove('redsquare');
	report2Link.classList.remove('redsquare');
	report3Link.classList.remove('redsquare');
	report100Link.classList.remove('redsquare');
	report110Link.classList.remove('redsquare');
	setenergy10Link.classList.remove('redsquare');        
    }

    function emptyElements() {
    	document.getElementById("manual").innerHTML = "";
    	document.getElementById("utility").innerHTML = "";
    	document.getElementById("amp6").innerHTML = "";
    	document.getElementById("amp10").innerHTML = "";
    	document.getElementById("amp16").innerHTML = "";
    	document.getElementById("amp20").innerHTML = "";
    	document.getElementById("amp25").innerHTML = "";
    	document.getElementById("amp32").innerHTML = "";
	document.getElementById("report1").innerHTML = "";
	document.getElementById("report2").innerHTML = "";
	document.getElementById("report3").innerHTML = "";
	document.getElementById("report100").innerHTML = "";
	document.getElementById("report110").innerHTML = "";
	document.getElementById("setenergy10").innerHTML = "";
    }




    function getAjax(file, where, arg = null) {
	var extra = "";
	if (arg.length > 0) { extra = "?";}
	for (var i = 0; i < arg.length; i += 1) {
	    console.log(arg[i]);
	    extra += "q" + (i+1) + "=" + arg[i] + "&";
	}

        var getUrl = window.location;
        var url = getUrl.protocol + "//" + getUrl.host + "/htdocs/js/python/";
	//var extra = arg ? "?q1=" + arg1 : "";
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
			if (x == "Curr user") {
			    text += "<span class='red'>" + x + ": " + myObj[x] + " | </span>";
			} else if (x == "Laddström") {
			    text += "<span class='red'>" + x + ": " + myObj[x] + "</span>";
			} else {
			    text += x + ": " + myObj[x] + " | ";
			}
			
		    }
		}
		
		document.getElementById(where).innerHTML = text;
	    }
	};
	xmlhttp.open("GET", to, true);
	xmlhttp.send();
    }


    function drawSquareManual() {
        manualLink.classList.add('redsquare');

        utilityLink.classList.remove('redsquare');
    }


    function drawSquareUtility() {
        utilityLink.classList.add('redsquare');

        manualLink.classList.remove('redsquare');
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

    sixLink.addEventListener("click", function () {
        console.log("Event for clicking link Six.");
	var args = ["curr", "6000", "yes"];
	getAjax("test.php", "amp6", args);
	emptyElements();
        drawSquareSix();
    });


    tenLink.addEventListener("click", function () {
        console.log("Event for clicking link Ten.");
	var args = ["curr", "10000", "yes"];
	getAjax("test.php", "amp10", args);
	emptyElements();
        drawSquareTen();
    });

    sixteenLink.addEventListener("click", function () {
        console.log("Event for clicking link Sixteen.");
	var args = ["curr", "13000", "yes"];
	getAjax("test.php", "amp16", args);
	emptyElements();
        drawSquareSixteen();
    });

    twentyLink.addEventListener("click", function () {
        console.log("Event for clicking link Twenty.");
	emptyElements();
	document.getElementById("amp20").innerHTML = "<br />20Amp klickat";
        drawSquareTwenty();
    });

    twentyfiveLink.addEventListener("click", function () {
        console.log("Event for clicking link Twentyfive.");
	emptyElements();
	document.getElementById("amp25").innerHTML = "<br />25Amp klickat";
        drawSquareTwentyfive();
    });

    thirtytwoLink.addEventListener("click", function () {
        console.log("Event for clicking link Thirtytwo.");
	emptyElements();
	document.getElementById("amp32").innerHTML = "<br />32Amp klickat";
        drawSquareThirtytwo();
    });


    manualLink.addEventListener("click", function () {
        console.log("Event for clicking link Manual.");
	var args = ["report", "1"];
	getAjax("test.php", "report1", args);
	emptyElements();
        drawSquareManual();
    });

    utilityLink.addEventListener("click", function () {
        console.log("Event for clicking link Utility.");
	var args = ["report", "2"];
	getAjax("test.php", "report2", args);
	emptyElements();
        drawSquareUtility();
    });

   report1Link.addEventListener("click", function () {
        console.log("Event for clicking link report1.");
	var args = ["report", "1"];
	getAjax("test.php", "report1", args);
	emptyElements();
        drawSquareReport1();
    });

    report2Link.addEventListener("click", function () {
        console.log("Event for clicking link report2.");
	var args = ["report", "2"];
	getAjax("test.php", "report2", args);
	emptyElements();
        drawSquareReport2();
    });

    report3Link.addEventListener("click", function () {
        console.log("Event for clicking link report3.");
	var args = ["report", "3"];
	getAjax("test.php", "report3", args);
	emptyElements();
        drawSquareReport3();
    });

    report100Link.addEventListener("click", function () {
        console.log("Event for clicking link report100.");
        var args = ["report", "100"];
        getAjax("test.php", "report100", args);
        emptyElements();
        drawSquareReport100();
    });

    report110Link.addEventListener("click", function () {
        console.log("Event for clicking link report110.");
        var args = ["report", "110"];
        getAjax("test.php", "report110", args);
        emptyElements();
        drawSquareReport110();
    });

    setenergy10Link.addEventListener("click", function () {
        console.log("Event for clicking link setenergy10.");
        //var args = ["setenergy", "100000", "yes"];
        var args = ["setenergy", "0", "yes"];
        getAjax("test.php", "setenergy10", args);
        emptyElements();
        drawSquareSetenergy10();
    });



    console.log('Sandbox is ready!');
}());
