nav();

const slides = document.querySelectorAll('#full-slide .banner > li');
setfullSlide();



// ----- NAV -----

function nav(){	
	$('.nav-toggle').click(function(){
		$('.nav').toggleClass('open');
	});
}

// ----- FULL-SLIDE -----

function setfullSlide() {
	const prev = document.querySelector('#full-slide .prev');
	const next = document.querySelector('#full-slide .next');

	prev.addEventListener('click', () => {
		fullSlideNext(-1)
	});
	next.addEventListener('click', () => {
		fullSlideNext(1)
	});
}

function fullSlideNext(increment) {
	let activeSlide = getActiveFullSlide();
	//désactiver la slide active
	slides[activeSlide].classList.toggle('active');
	
	activeSlide += increment;
	if (activeSlide < 0) {
		activeSlide = 0
	}
	if (activeSlide > (slides.length - 1)) {
		activeSlide = (slides.length - 1);
	}
	
	//activer la nouvelle slide
	slides[activeSlide].classList.toggle('active');
}

function getActiveFullSlide() {
	let activeSlide = null;
	slides.forEach((slide, i) => {
		if (slide.classList.contains('active')) {
			activeSlide = i;
		}
	})
	return activeSlide;
}