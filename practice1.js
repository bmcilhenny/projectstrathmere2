//
// When Contact link in navbar is clicked focus in on the fullName field of the form
//
function contactFocus() {
	var fullName = document.getElementById('fullName');
	fullName.focus();
}

var contactLink = document.getElementById('hello');

contactLink.addEventListener('click', contactFocus, false);

//Querying Magicseaweed.com API using AJAX
//Want: live time stamp: wind direction, wind speed underneath wind direction, air temperature and wave height
//With an array of objects, by setting a variable equal to a particular index we can then use
//the dot notation to pick  particular key to return value at that key:
//Need to write a function to make sure time being compared to most recent magicseaweed time is always on Strathmere, NJ local time

// Normalize for Strathmere time
function calcStrathmereTime(offset) {
    // create Date object for current location
    var currentTime = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = currentTime.getTime() - (currentTime.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var newTimeZoneDate = new Date(utc + (3600000*offset));
	newTimeZoneDate = parseInt((newTimeZoneDate.getTime() / 1000).toFixed(0));
    // return timestamp as a string
    return newTimeZoneDate;
}


function checkTime(data) {
	var $weather = $('#weather-conditions');
	var curr = data[0];
	console.log(curr.localTimestamp)
	var strathmereTime = calcStrathmereTime('4.0');
    	var diff = Math.abs (strathmereTime - curr.localTimestamp);


	for (var i = 0; i < data.length; i++) {
		var newdiff = Math.abs (strathmereTime - data[i].localTimestamp);
        if (newdiff < diff) {
        	diff = newdiff;
            curr = data[i];
        }
    }
    
    var theDate = new Date(curr.localTimestamp * 1000);
	
   	$weather.append('<table><th>Last updated as of: </th><th>Wind direction</th><th>Wind speed</th><th>Air temperature</th><th>Swell height</th><tr><td>' + theDate +'</td><td>' + curr.wind.compassDirection + '</td><td>' + curr.wind.speed + ' mph </td><td>' + curr.condition.temperature + ' &#8457</td><td>' + curr.swell.components.primary.height + ' ft</td></tr></table>');
}

$(document).ready(function() {
	$.ajax({
		type: 'GET',
	    url: "https://magicseaweed.com/api/1d110434ae41701c54d0adec36cf5bb9/forecast/?spot_id=1281&units=us&fields=localTimestamp,wind.speed,wind.compassDirection,condition.temperature,swell.components.primary.height&callback=checkTime",

	    // The name of the callback parameter
	    jsonp: "xyz",

	    // Tell jQuery we're expecting JSONP
	    dataType: "jsonp",
	});
});



$(document).ready(function() {
	$('#weather').hide();
	$('#surf').on('click', function() {
		$('#weather').animate({
    		height: "toggle"
  	}, 500, function() {
    // Animation complete
	});
	});
});
// Remove weather-conditions section on click
$('#x-box').on('click', function() {
	$('#weather').animate({
    		height: "toggle"
  	}, 500, function() {
	});
});

//Slideshow
var slideIndex = 1
showSlides();

function showSlides() {
	var slideShowLinks = ['bridge.jpg', 'corsons.jpg', 'deuville.jpg', 'old-strathmere.jpg', 'IMG_6341.PNG'];
	$slideshow = $('#slideshow');
	$slideshow.addClass('fade');
	setTimeout(function() {
		$slideshow.removeClass('fade');
	}, 1900);
	$slideshow.css("background-image", "url(" + slideShowLinks[slideIndex-1] +")");
	$dot = $('.dot');
	$dot.removeClass('active');
	$dot.eq(slideIndex-1).addClass('active');
	$numbertext = $('.numbertext');
	$numbertext.text(slideIndex + '/' + slideShowLinks.length)

    slideIndex++;
    if (slideIndex> slideShowLinks.length) {
    	slideIndex = 1
    }
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// Email Signup Popup
$("#emailForm").submit(function(){
 alert("Thanks for signing up!");
});
