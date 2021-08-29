const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50 ;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar-collapse a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.navbar-collapse a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*home*/
sr.reveal('.home_title', {})
sr.reveal('.my_image', {origin:'right', delay: 400})

/*about*/
sr.reveal('.section_title', {})
sr.reveal('.about_img', {delay: 500})
sr.reveal('.about_sub', {delay: 300})
sr.reveal('.about_prof', {delay: 400})
sr.reveal('.about_text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SKILLS*/
sr.reveal('.skills_subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills_img', {delay: 400})

/*PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*CONTACT*/
sr.reveal('.contact_subtitle', {})
sr.reveal('.contact_text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})