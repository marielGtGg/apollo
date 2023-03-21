class FullSlide {
    
    constructor(slides, prev, next) {
        this.slides = slides;
        this.activeSlide = 0;

        prev.addEventListener('click', () => {
            this.next(-1)
        });

        next.addEventListener('click', () => {
            this.next(1)
        });
    }  
    
    next(increment) {
        //désactiver la slide active
        this.slides[this.activeSlide].classList.remove('active');
        
        this.activeSlide += increment;

        if (this.activeSlide < 0) {
            this.activeSlide = 0
        }

        if (this.activeSlide > (this.slides.length - 1)) {
            this.activeSlide = (this.slides.length - 1);
        }
        
        //activer la nouvelle slide
        this.slides[this.activeSlide].classList.add('active');
    }

}