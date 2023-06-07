var sections = document.querySelectorAll('section')
var nav_links = document.querySelectorAll('header nav a')

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

}