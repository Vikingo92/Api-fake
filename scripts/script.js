 // Captura de la informacion del DOM.
 const main = document.getElementById('render')
 const search = document.getElementById('buscar')
 const form = document.getElementById('formulario')
 const btn = document.getElementById('boton')
 const login  = document.getElementById('login')
 const template = document.getElementById('template-card').content
 const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', async() => {
    const res = await fetch('http://localhost:4000/series')
    const data = await res.json()
    console.log(data);

    showSeries(data);

})

const showSeries = (series) => {
    series.forEach(serie => {
    const { name, description, image, genre } = serie

    template.querySelector('img').setAttribute('src', image)
    template.querySelector('.card-title').textContent = serie.name
    template.querySelector('.card-info p').textContent = serie.description
    template.querySelector('.card-text').textContent = serie.genre
    
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)

    })
    main.appendChild(fragment)
};
 
login.addEventListener('click', ejecutar)

function ejecutar() {
    location.href='./html/login.html'
}

 