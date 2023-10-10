const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let photo = 0
let text = 0

const flecheGauche = document.querySelector(".arrow_left")
		// console.log (flecheGauche)
flecheGauche.addEventListener("click", function () {
	//console.log("vous avez cliqué sur le bouton gauche");
	dotSelected[photo].classList.remove("dot_selected")
	photo--

	// condition

	if (photo === -1) {
		photo = slides.length -1
	} 

	dotSelected[photo].classList.add("dot_selected")
	// condition

	let picture = document.querySelector(".banner-img");
	picture.src = "./assets/images/slideshow/" + slides[photo].image;
	//console.log(photo);

	text--
	//CONDITION
	if (text === -1) {
		text = slides.length -1
	} 
	// console.log(text);
	// CONDITION

	let title = document.querySelector("p");
	title.innerHTML = ""+ slides[text].tagLine ;
	console.log(title);
});


const flecheDroite = document.querySelector(".arrow_right")
			//console.log(flecheDroite);
flecheDroite.addEventListener("click", function () {
	//console.log("Vous avez cliqué sur le bouton droit")
	dotSelected[photo].classList.remove("dot_selected")
	photo++
	
	// CONDITION
	 if (photo >= slides.length) {
		photo = 0
	}
	// console.log(photo);
	// CONDITION

	let picture = document.querySelector(".banner-img");
	picture.src = "./assets/images/slideshow/" + slides[photo].image;
	//console.log(photo);
	
	text++

	// CONDITION
	 if (text >= slides.length) {
		text = 0
	}
	// console.log(photo);
	// CONDITION
	dotSelected[photo].classList.add("dot_selected")

	let title = document.querySelector("p");
	title.innerHTML = ""+ slides[text].tagLine ;
	// console.log(title);
});



for (let compteur = 0; compteur < slides.length; compteur++){
		//console.log(slides[compteur]);
let dot = document.createElement("div");
let bullets = document.querySelector(".dots");

		//console.log(bullets)
	dot.classList.add("dot")
	bullets.appendChild(dot)
}

let dotSelected = document.querySelectorAll(".dot")
dotSelected[0].classList.add("dot_selected")


