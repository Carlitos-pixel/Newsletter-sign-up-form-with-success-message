const form = document.getElementById('form')
const email = document.getElementById('email')
const emaillnput = document.getElementById('email-input')
const errorMsg = document.getElementById('error-msg')
const ctaForm = document.getElementById('form-cta')
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
// /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.-][a-z]{2,4}$/

const popup = document.getElementById('popup')
const ctaPopup = document.getElementById('cta-success')
const showEmail = document.getElementById('show-email')

function validateEmail(){
    if(emaillnput.value.match(pattern)){
        emaillnput.classList.add('correct')
        emaillnput.classList.remove('error')
        errorMsg.style.display ="none"
        
    }else{
        emaillnput.classList.remove('correct')
        emaillnput.classList.add('error')
        errorMsg.style.display = "block"
        
    }
   
}

ctaForm.addEventListener('click', (e)=>{
    const emailAdress = emaillnput.value
    if(!emaillnput.classList.contains('error') && (!emaillnput.value == "")) {
        form.style.display = "none"
        popup.classList.add('show')
        showEmail.innerHTML = emailAdress
        e.preventDefault()
    }else{
        emaillnput.classList.add('error')
        errorMsg.style.display ="block"
    }

})

ctaPopup.addEventListener('click', ()=>{
    location.reload()
})

