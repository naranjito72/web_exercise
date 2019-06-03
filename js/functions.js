let canvas = document.getElementsByTagName('canvas');

//let context = canvas.getContext('2d');
//cuando hacemos la llamada de context siempre debemos escoger 2d como parametro
//tamaño canvas dado en HTML

/*context.beginPath();
context.arc(95, 50, 40, 0, 2 * Math.PI);
context.stroke();*/
//me devuelve null en get context
//carga de js demasiado rapida? en el ejercicio no daba problemas
//no había repasado el id en getelement by id cazurro!!

//probemos imagen
//madre mia!! mismo dibujo en tres canvas?


for( let i=0; i<canvas.length; i++){
    context = canvas[i].getContext('2d');

    context.arc(50, 50, 50, 0, 2*Math.PI);
    context.lineWidth = 15;

    context.strokeStyle = 'grey';
    context.stroke();    
}