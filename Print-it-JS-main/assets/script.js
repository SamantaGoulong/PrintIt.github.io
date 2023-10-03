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
// console.log(slides[photo].image);

const flècheGauche = document.querySelector(".arrow_left")
		// console.log (flècheGauche)
flècheGauche.addEventListener("click", function () {
		//console.log("vous avez cliqué sur le bouton gauche");
	photo--
	let picture = document.querySelector(".banner-img");
	picture.src = "./assets/images/slideshow/" + slides[photo].image;
	//console.log(photo);

	text--
	let title = document.querySelector("p");
	title.innerHTML = ""+ slides[text].tagLine ;
	console.log(title);
});


const flècheDroite = document.querySelector(".arrow_right")
			//console.log(flècheDroite);
flècheDroite.addEventListener("click", function () {
			//console.log("Vous avez cliqué sur le bouton droit")
	photo++
	let picture = document.querySelector(".banner-img");
	picture.src = "./assets/images/slideshow/" + slides[photo].image;
	//console.log(photo);

	text++
	let title = document.querySelector("p");
	title.innerHTML = ""+ slides[text].tagLine ;
	console.log(title);
	});



for (let compteur = 0; compteur < slides.length; compteur++){
		//console.log(slides[compteur]);
let dot = document.createElement("div");
let bullets = document.querySelector(".dots");
bullets.appendChild(dot)
		//console.log(bullets)
dot.classList.add("dot")
}

let dotSelected = document.querySelector(".dot")
dotSelected.classList.add("dot_selected")


