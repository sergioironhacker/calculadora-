alert("Hola");
let boton = document.getElementById('boton');
let respuesta = document.getElementById('total');
boton.addEventListener('click',hacerOperacion);



function hacerOperacion(){
    let Monto=parseFloat(document.getElementById('Monto').value);
    let Porcentaje=parseFloat(document.getElementById('Porcentaje').value);
    let s = ((Porcentaje/100)*Monto)+Monto;
    respuesta.innerHTML=`Total a pagar ${s}`;
    
}
