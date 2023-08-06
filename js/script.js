document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.peliculas').forEach(pelicula => {
           const titulo = pelicula.querySelector('.titulo').textContent.toLowerCase();
           if (titulo.includes(searchTerm)) {
            pelicula.classList.remove("filtro");
           } else {
            pelicula.classList.add("filtro");
           }

        });
    }
});

document.addEventListener('keyup', e => {
    if (e.target.matches('#buscadorCategorias')) {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.peliculas').forEach(pelicula => {
           const titulo = pelicula.querySelector('.genero').textContent.toLowerCase();
           if (titulo.includes(searchTerm)) {
            pelicula.classList.remove("filtro");
           } else {
            pelicula.classList.add("filtro");
           }

        });
    }
});