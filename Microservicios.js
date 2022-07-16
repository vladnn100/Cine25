let pagina = 1;
// const btnAnterior = document.getElementById('btnAnterior');
// const btnSiguiente = document.getElementById('btnSiguiente');

// btnSiguiente.addEventListener('click', () => {
// 	if(pagina < 1000){
// 		pagina += 1;
// 		cargarPeliculas();
// 	}
// });

// btnAnterior.addEventListener('click', () => {
// 	if(pagina > 1){
// 		pagina -= 1;
// 		cargarPeliculas();
// 	}
// });

const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			
			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `	
                    <div class="fila-vehiculo col-sm-3 mb-5">
                        <div class="row card-vehiculo wow animate_animated  animate__bounceIn animate_delay-1s">
                            <div class="col-sm-12 image">
                                <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" />
                            </div>
                            <div class="col-sm-12 card-vehiculo-inner">
                                <div class="header">
                                    <h3>${pelicula.title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;

		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}

}

cargarPeliculas();



                    // <div class="pelicula">
					// 	<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
					// 	<h3 class="titulo">${pelicula.title}</h3>
					// </div>