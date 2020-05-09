$(document).ready(function(){
	
	//operando sobre el scroll de la ventana
	
	$(window).scroll(function(){
		
		//obtener el valor del ancho de la pantalla
		
		var windowWidth = $(window).width();
		
		//si la ventana es mayor a 800px ejecuta la accion
		
		if(windowWidth > 800){
			
			var scroll = $(window).scrollTop();
			
			//animar los textos:
			
			$('header .textos').css({
				
				'transform':'translate(0px, ' +  scroll/2   + '%)'});
			
			
						
			$('.acerca-de article').css({
				
				'transform':'translate(0px, -' +  scroll/4  + '%)' 
				
			});
			
		}
			
		});
	
	
	
	//reestablecer los valores cuando cambie la pantalla (por ejemplo si el usuario esta en una tablet la coloca en formato horizontal)
	
	$(window).resize(function(){
		
		//obtnemeos de vuelta el valo de nuestra ventana
		
		var windowWidth = $(window).width();
		
		if (windowWidth <800){
			
			
			$('.acerca-de article').css({
				
				//regresamos la posicion del article a su posicion original
				'transform':'translate(0px, 0px)' 
				
			});
			
			$('header .textos').css({
				
				//regresamos la posicion del article a su posicion original
				'transform':'translate(0px, 0px)',
				'margin-top':'30px',
				
			});
			
			}
	});
	
	
});