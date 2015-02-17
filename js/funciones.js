// Evento que muestra y esconde el menu para la version responsive

$("#boton").click(function(){
	$("#desplegable").slideToggle(1000);
});

function redimencion() {
	obj = document.getElementById("desplegable");
	w = window.innerWidth;
	if (w >= 1024) {
		obj.style.display = "block";
	}else{
		obj.style.display = "none";
	}
}
window.onresize = redimencion;

// Funcion especifica de la pasarela de imagenes

$(function() {
	$("#slider").responsiveSlides({
		pager: false,
		speed: 2000,
		namespace: "callbacks"
	});
});

// Funcion especifica de la galeria de imagenes

$(function(){
	
	$('#thumbs a').touchTouch();
});

// Evento que muestra y esconde la informacion acerca de los servicios

$(".servicios figure").each(function(i){
	$("#servicio_" + i).click(function(){
		$("#background_" + i).fadeIn(1000);
	});
});
$(".icon-close").click(function(){
	$(".presentacion_background").fadeOut(1000);
});