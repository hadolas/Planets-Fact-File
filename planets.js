var planet_name = document.querySelector(".planet_name");
var planet_img = document.querySelector(".planet_img");
var planet_radius = document.querySelector(".planet_radius");
var planet_orbital_period = document.querySelector(".planet_orbital_period");
var planet_moons = document.querySelector(".planet_moons");
var planet_day_length = document.querySelector(".planet_day_length");

function Planet(name, img, radius, orbital_period, moons, day_length) {
	this.name = name;
	this.img = img;
	this.radius = radius;
	this.orbital_period = orbital_period;
	this.moons = moons;
	this.day_length = day_length;
}

var Mercury = new Planet("Mercury", "../imgs/mercury.png", "2,439km", "88 Earth days", "None", "58d 15h 30m");

planet_name.textContent = Mercury.name;
planet_img.src = Mercury.img;
planet_radius.textContent = Mercury.radius;
planet_orbital_period.textContent = Mercury.orbital_period;
planet_moons.textContent = Mercury.moons;
planet_day_length.textContent = Mercury.day_length;

