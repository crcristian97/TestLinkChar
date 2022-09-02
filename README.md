//////Dependencias///////

-npm i react-youtube
-npm i gsap
-npm i axios
-npm i formik
-npm i react-dom
-npm install react-bootstrap bootstrap

/////Uso de la aplicacion/////

La pantalla de inicio tiene un formulario con validacion echas en formik
Una vez que se apreta Enviar te manda al layout de la aplicacion Movie , donde se encuentra la api (con axios) y trae todas las peliculas
En ese layout arriba a la derecha hay un buscador donde podes buscar cualquier pelicula, una vez apretado enter, te muestra las peliculas
Cada pelicula muestra descripcion,titulo,puntaje y un trailer traido desde react-youtube
La pelicula de portada cada vez que refresca se carga aleatoriamente
Con respecto a la funcionalidad se crearon useState para manejar los estados, useEffect
Disenio responsive

-Se utilizo bootstrap para algunos estilos