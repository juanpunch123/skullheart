var num=0;
var direccion=0;//0 significa que está a la derecha y 1 significa a la izquierda
var foto=document.getElementById("imag")
if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el SW'))
}
function atras(){
    if(num <= 0){
        num = 4;
    }else{
        num--;
    }
    foto.src="imag" + num + ".jpg";
    direccion = 1;
}
function adelante(){
    if(num >= 4){
        num = 0;
    }else{
        num++;
    }
    foto.src="imag" + num + ".jpg";
    direccion = 0;
}
function incrementar(){
   if(direccion == 1){
       atras();
   }else{
       adelante();
   }
}
setInterval(incrementar, 3000);
