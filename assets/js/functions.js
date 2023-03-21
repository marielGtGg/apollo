nav();

const fullSlides = document.querySelectorAll('#full-slide .banner > li');
const prev = document.querySelector('#full-slide .prev');
const next = document.querySelector('#full-slide .next');
new FullSlide(fullSlides, prev, next);

const threeSlides = document.querySelectorAll('#three-slide .slider > li');
new ThreeSlide(threeSlides);

const submitBtn = document.getElementById('contact-submit-btn');
const email = document.getElementById('contact-email');
const subject = document.getElementById('contact-subject');
const body = document.getElementById('contact-body');
const message = document.getElementById('contact-message');
new ContactForm(submitBtn, email, subject, body, message);

// ----- NAV -----

function nav(){	
	$('.nav-toggle').click(function(){
		$('.nav').toggleClass('open');
	});
}
