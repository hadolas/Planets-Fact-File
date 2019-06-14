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

function Planet(name, img, radius, orbital_period, moons, day_length) {
	this.name = name;
	this.img = img;
	this.radius = radius;
	this.orbital_period = orbital_period;
	this.moons = moons;
	this.day_length = day_length;
}

var planets_array = [];

var Mercury = new Planet("Mercury", "../imgs/mercury.png", "2,439km", "88 Earth days", "None", "58d 15h 30m");
planets_array.push(Mercury);
var Venus = new Planet("Venus", "../imgs/mercury.png", "0km", "0 Earth days", "0", "0d 0h 0m");
planets_array.push(Venus);
var Earth = new Planet("Earth", "../imgs/mercury.png", "0km", "0 Earth days", "0", "0d 0h 0m");
planets_array.push(Earth);

var planets_array_length = planets_array.length;

// console.log(planets_array);
// console.log(planets_array_length);

planet_name.textContent = Mercury.name;
planet_img.src = Mercury.img;
planet_radius.textContent = Mercury.radius;
planet_orbital_period.textContent = Mercury.orbital_period;
planet_moons.textContent = Mercury.moons;
planet_day_length.textContent = Mercury.day_length;

var planets_array_pointer = 0;

// button_left
button_left.addEventListener("click", function() {
	// console.log(planets_array_pointer);
	if(planets_array_pointer===0){
		planets_array_pointer=planets_array_length-1;
	} else {
		planets_array_pointer--;
	}
	
	// console.log(planets_array_pointer);

	planet_name.textContent = planets_array[planets_array_pointer].name;
	planet_img.src = planets_array[planets_array_pointer].img;
	planet_radius.textContent = planets_array[planets_array_pointer].radius;
	planet_orbital_period.textContent = planets_array[planets_array_pointer].orbital_period;
	planet_moons.textContent = planets_array[planets_array_pointer].moons;
	planet_day_length.textContent = planets_array[planets_array_pointer].day_length;
});

// button_right
button_right.addEventListener("click", function() {
	// console.log(planets_array_length-1);
	if(planets_array_pointer===planets_array_length-1) {
		planets_array_pointer=0;
	} else {
		console.log(planets_array_pointer);
		planets_array_pointer++;
	}

	planet_name.textContent = planets_array[planets_array_pointer].name;
	planet_img.src = planets_array[planets_array_pointer].img;
	planet_radius.textContent = planets_array[planets_array_pointer].radius;
	planet_orbital_period.textContent = planets_array[planets_array_pointer].orbital_period;
	planet_moons.textContent = planets_array[planets_array_pointer].moons;
	planet_day_length.textContent = planets_array[planets_array_pointer].day_length;
});



