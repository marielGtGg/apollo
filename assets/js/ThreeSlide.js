class ThreeSlide {
    
    constructor(slides) {
        this.slides = slides;
        
        this.slides.forEach((slide, i) => {
            slide.addEventListener('click', () => {
                this.next(i);
            })
        });
    }  
    
    next(slideIndex) {
        //définir la slide qui prendra chaque position
        this.current = this.slides[slideIndex];

        if (slideIndex === 0) {
            this.back = this.slides[this.slides.length - 1];
        } else {
            this.back = this.slides[slideIndex - 1];
        }
        
        if (slideIndex === (this.slides.length - 1)) {
            this.front = this.slides[0];
        } else {
            this.front = this.slides[slideIndex + 1];
        }

        //retirer toutes les classes
        this.slides.forEach((slide, i) => {
            slide.classList.remove('back', 'current', 'front');
        });

        //ajouter les nouvelles classes
        this.back.classList.add('back');
        this.current.classList.add('current');
        this.front.classList.add('front');

    }

}