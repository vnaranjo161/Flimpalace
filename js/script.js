document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.peliculasYSeries').forEach(pelicula => {
           const titulo = pelicula.querySelector('.titulo').textContent.toLowerCase();
           if (titulo.includes(searchTerm)) {
            pelicula.classList.remove("filtro");
           } else {
            pelicula.classList.add("filtro");
           }

        });
    }
});



//----------------------------------------------------
const modal = document.getElementById('myModal');
const modalBtns = document.querySelectorAll('.modal-btn');
const closeBtn = document.getElementById('closeBtn');
const videoFrame = document.getElementById('videoFrame');

// Abrir ventana modal y cargar video
modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const videoId = btn.getAttribute('data-video');
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    videoFrame.setAttribute('src', videoUrl);
    modal.style.display = 'block';
  });
});

// Cerrar ventana modal y detener el video
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  videoFrame.setAttribute('src', '');
});

// Cerrar ventana modal haciendo clic fuera del contenido
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    videoFrame.setAttribute('src', '');
  }
});


document.addEventListener('keyup', e => {
  if (e.target.matches('#buscadorCategorias')) {
      const searchTerm = e.target.value.toLowerCase();
      document.querySelectorAll('.peliculasYSeries').forEach(pelicula => {
         const titulo = pelicula.querySelector('.genero').textContent.toLowerCase();
         if (titulo.includes(searchTerm)) {
          pelicula.classList.remove("filtro");
         } else {
          pelicula.classList.add("filtro");
         }

      });
  }
});


// Iniciar el carrusel cuando la página carga
window.onload = function () {
  updateCarouselPosition();
  };