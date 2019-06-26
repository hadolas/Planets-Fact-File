// Content Selectors
var planet_name = document.querySelector(".planet_name");
var planet_img = document.querySelector(".planet_img");
var planet_radius = document.querySelector(".planet_radius");
var planet_orbital_period = document.querySelector(".planet_orbital_period");
var planet_moons = document.querySelector(".planet_moons");
var planet_day_length = document.querySelector(".planet_day_length");
// Nav Selectors
var button_left = document.querySelector("#button_left");
var button_right = document.querySelector("#button_right");
var nav_links_container = document.querySelector(".nav_links_container");

function Planet(name, img, radius, orbital_period, moons, day_length) {
	this.name = name;
	this.img = img;
	this.radius = radius;
	this.orbital_period = orbital_period;
	this.moons = moons;
	this.day_length = day_length;
}

function updatePlanetDetails(planets_array_pointer) {
	planet_name.textContent = planets_array[planets_array_pointer].name;
	planet_img.src = planets_array[planets_array_pointer].img;
	planet_radius.textContent = planets_array[planets_array_pointer].radius;
	planet_orbital_period.textContent = planets_array[planets_array_pointer].orbital_period;
	planet_moons.textContent = planets_array[planets_array_pointer].moons;
	planet_day_length.textContent = planets_array[planets_array_pointer].day_length;
}

function decrement_planet_array_pointer() {
	if(planets_array_pointer===0){
		planets_array_pointer=planets_array_length-1;
	} else {
		planets_array_pointer--;
	}
}

function increment_planet_array_pointer() {
	if(planets_array_pointer===planets_array_length-1) {
		planets_array_pointer=0;
	} else {
		planets_array_pointer++;
	}
}

var planets_array = [];

var Mercury = new Planet("Mercury", "../imgs/mercury.png", "2,439km", "88 Earth days", "None", "58d 15h 30m");
planets_array.push(Mercury);
var Venus = new Planet("Venus", "../imgs/venus.png", "6,051km", "225 Earth days", "None", "116d 18h 0m");
planets_array.push(Venus);
var Earth = new Planet("Earth", "../imgs/earth.png", "6,371km", "1 Earth day", "1", "365d 0h 0m");
planets_array.push(Earth);
var Mars = new Planet("Mars", "../imgs/mars.png", "3,389km", "687 Earth days", "2", "1d 0h 37m");
planets_array.push(Mars);
var Jupiter = new Planet("Jupiter", "../imgs/jupiter.png", "69,911km", "4,332 Earth days", "79 known", "0d 9h 56m");
planets_array.push(Jupiter);
var Saturn = new Planet("Saturn", "../imgs/saturn.png", "58,232km", "10,759 Earth days", "53 confirmed", "0d 10h 42m");
planets_array.push(Saturn);
var Uranus = new Planet("Uranus", "../imgs/uranus.png", "25,362km", "31,000 Earth days", "27", "0d 17h 14m");
planets_array.push(Uranus);
var Neptune = new Planet("Neptune", "../imgs/neptune.png", "24,622km", "60,200 Earth days", "14", "0d 16h 6m");
planets_array.push(Neptune);


var planets_array_length = planets_array.length;
var planets_array_pointer = 0;

updatePlanetDetails(planets_array_pointer);

// button_left
button_left.addEventListener("click", function() {
	decrement_planet_array_pointer();
	updatePlanetDetails(planets_array_pointer);
});

// button_right
button_right.addEventListener("click", function() {
	increment_planet_array_pointer();
	updatePlanetDetails(planets_array_pointer);
});

// Create a nav_link (dot) for each planet
var nav_links_total = 0;
function createNewNavLink() {
	var newLink = document.createElement("span");
	newLink.id = nav_links_total
	nav_links_container.appendChild(newLink);
	nav_links_total++;
}

for(var i=0; i<planets_array_length; i++) {
	createNewNavLink();
}

// If a nav_link (dot) is clicked, then update info to that planet
var nav_links = document.querySelectorAll(".nav_links_container > span");
nav_links_container.addEventListener("click", function(){
	
	if(event.target.id) {
		updatePlanetDetails(event.target.id);
	}
});


// Show info label when hovering over a nav_link (dot)
var hover_label = document.querySelector(".hover_label");
var hover_label_arrow = document.querySelector(".hover_label_arrow");

var regex = /\d*/; // regex removes characters which are not digits

var hover_label_text = document.querySelector(".hover_label_text");
nav_links_container.addEventListener("mouseover", function(){
	if(event.target.id) {

		hover_label_text.textContent = planets_array[event.target.id].name;
		hover_label_arrow.style.left = "20px"; // Distance between each nav_link (dot)
		var arrow_pos = regex.exec(hover_label_arrow.style.left)[0]; // Remove 'px'
		hover_label_arrow.style.left = (arrow_pos*event.target.id)+5+"px"; // Update arrow position
		hover_label.style.visibility = "visible";

	} else {
		hover_label.style.visibility = "hidden";
	}
});

// Navigating with arrow keys
document.addEventListener("keydown", function(event){

	if(event.which===39) {
		increment_planet_array_pointer();
		updatePlanetDetails(planets_array_pointer);
	}
	if(event.which===37) {
		decrement_planet_array_pointer();
		updatePlanetDetails(planets_array_pointer);
	}
});