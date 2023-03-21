class ContactForm {
    
    constructor(submitBtn, email, subject, body, message) {
        this.submitBtn = submitBtn;
        this.email = email;
        this.subject = subject;
        this.body = body;
        this.message = message;
        
        this.submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this.submitForm()
        });

    }  
    
    submitForm() {
        if (!this.email.value) {
            return this.message.textContent = 'Oups! Veuillez préciser votre courriel.';
        } else if (!this.body.value) {
            return this.message.textContent = 'Oups! Il manque le contenu de votre courriel.';
        } 

        const headers = {
            'Content-Type': 'application/json'
        }
        
        const body = {
            email: this.email.value,
            subject: this.subject.value,
            body: this.body.value,
        }

        fetch('/phpMailer.php', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
        .then(response => response.text())
        .then(data => {
            if (data == true) {
                this.email.value = null;
                this.subject.value = null;
                this.body.value = null;
                return this.message.textContent = 'Merci! On a bien reçu votre message.'; 
            } else {
                return this.message.textContent = 'Hum, quelque chose ne va pas. Vérifiez que le courriel est valide.'; 
            }
        })
        .catch(error => console.log(error))   
    }

}