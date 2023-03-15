nav();

const slides = document.querySelectorAll('#full-slide .banner > li');
const prev = document.querySelector('#full-slide .prev');
const next = document.querySelector('#full-slide .next');

new FullSlide(slides, prev, next);


// ----- NAV -----

function nav(){	
	$('.nav-toggle').click(function(){
		$('.nav').toggleClass('open');
	});
}


