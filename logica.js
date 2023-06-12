// sección para hacer el nav-bar responsive

let icon_menu = document.querySelector('.bx-menu')
let nav_nar = document.querySelector('.nav-bar')

icon_menu.onclick = () => {
    
    
    
    
    if (icon_menu.classList.contains('bx-menu')){
        icon_menu.classList.replace('bx-menu','bxl-tux')
    }else{
        icon_menu.classList.replace('bxl-tux','bx-menu')
    }
    nav_nar.classList.toggle('active');
    
}



var sections = document.querySelectorAll('section')
var nav_links = document.querySelectorAll('header nav a')

// Sección para que cuando haga scrolldown se ilumine en el nagbar la parte correspondiente a la sección en la que estamos 
window.onscroll = () =>{
    sections.forEach(secuencia => {
        let arriba = window.scrollY
        let offset = secuencia.offsetTop - 150
        let height = secuencia.offsetHeight
        let id = secuencia.getAttribute('id')

        if (arriba >= offset && arriba < offset + height){
            nav_links.forEach(link => {
                link.classList.remove('active')
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active')
            })
        }        
    })

    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100)


}

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    dilay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});

