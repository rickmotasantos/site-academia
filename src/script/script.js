const elementos = document.querySelectorAll(".hidden")

const observador = new IntersectionObserver( (entries) => {
    entries.forEach( (entrar) => {
        if(entrar.isIntersecting){
            entrar.target.classList.add('show')
        }
        else {
            entrar.target.classList.remove('show')
        }
    })  
    
})

elementos.forEach( (elementos)=> observador.observe(elementos))