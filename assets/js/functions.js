nav();

const fullSlides = document.querySelectorAll('#full-slide .banner > li');
const prev = document.querySelector('#full-slide .prev');
const next = document.querySelector('#full-slide .next');

new FullSlide(fullSlides, prev, next);

const threeSlides = document.querySelectorAll('#three-slide .slider > li');

new ThreeSlide(threeSlides);

// ----- NAV -----

function nav(){	
	$('.nav-toggle').click(function(){
		$('.nav').toggleClass('open');
	});
}

