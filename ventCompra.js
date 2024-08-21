/* APARECE LOS DISTINTOS MEDIOS DE PAGO*/  
document.getElementsByClassName("container_medio_pago1")[0].style.marginTop=""
function aparecerMedios(){
    var medios = document.getElementsByClassName("container_medio_pago1")[0]
    var flecha = document.getElementById("menor")
   
    if(medios.style.marginTop === "-54px" || medios.style.marginTop === "" ){
        medios.style.marginTop="0"
        flecha.style.transform= "rotate(90deg)"

    }
    else{
        medios.style.marginTop="-54px"
        flecha.style.transform= "rotate(-90deg)"
    }
}

/* ABRE EL MENU DESPLEGABLE*/

function ejecutarMenuDesplegble(){
    var menu = document.getElementById("menu-desplegable")
    menu.style.animation=""
    if(menu.style.display === "" || menu.style.display === "none"){
        menu.style.display="flex"
        menu.style.animation="aparecer ease 1s forwards"
        menu.style.animationDirection="normal"
        return
    }
    else if (menu.style.display==="flex") {
        void menu.offsetWidth;
        menu.style.animation="aparecer linear 0.5s forwards"
        menu.style.animationDirection="reverse"
        menu.addEventListener('animationend', function() {
            menu.style.display = "none";
        }, { once: true });
        
    }
}

/*ARRASTRA LAS IMAGENES CON EL TACTIL*/
let contador = 0
window.addEventListener("resize",()=>{
contador=0
console.log(contador)
containerImgs.style.transform=`translateX(${contador}%)`
})

const containerImgs = document.getElementsByClassName("container_img-holder")[0];
const imagenesTouch= document.getElementsByClassName("container_img-element")
let startX;
const maxTranslateTouch = -110*(imagenesTouch.length-1)
containerImgs.addEventListener("touchstart", e=>{
    startX= e.touches[0].pageX;
})
containerImgs.addEventListener("touchend",e =>{
    const endX= e.changedTouches[0].pageX;
    diffX= endX - startX;
    if(window.innerWidth > 800){
        return
    }
    if (diffX>-50 && contador!=0) {
        contador+=110
        containerImgs.style.transform=`translateX(${contador}%)`
    }
    if (diffX<50 && contador!=maxTranslateTouch) {
        contador-=110
        containerImgs.style.transform=`translateX(${contador}%)`
    }
})

/* ARRASTRA LAS IMAGENES A LA DERECHA O A LA IZQUIERDA TAMBIEN USA LET CONTADOR*/


function arrastrarDerecha(container,img,porcentaje,exepciones){
    var containerImg= document.getElementsByClassName(container)[0];
    var imagenes= document.getElementsByClassName(img)
    var cantImgs = imagenes.length-1
    const maxTranslate = (cantImgs-exepciones)*-porcentaje
    
    if(contador<=maxTranslate)
        return
    else{
        contador-=porcentaje
        containerImg.style.transform=`translateX(${contador}%)`
    }
}

function arrastrarIzquierda(container,porcentaje){
    var containerImg= document.getElementsByClassName(container)[0];
    if(contador>=0)
        return
    else{
        contador+=porcentaje
        containerImg.style.transform=`translateX(${contador}%)`
    }
}

/* SUMA O RESTA A LA CANTIDAD DE PRENDAS A COMPRAR*/

let numCount= 1
function restar(){
    if(numCount<=1){
        return
    }
    const num= document.getElementById("num")
    numCount-=1;
    num.textContent= numCount
}
function sumar(){
    if (numCount>=10) {
        return
    }
    const num= document.getElementById("num")
    numCount+=1;
    num.textContent= numCount
}

/* SELECCIONA QUE IMAGEN VER COMO PRINCIPAL EN RESOLUCION DE COMPUTADORAS*/
const img1=document.getElementById("img1")
const img2=document.getElementById("img2")
const img3=document.getElementById("img3")
const imgPrincipal= document.getElementById("img-principal")

function seleccionarImg(num){
    if (num===1) {
        imgPrincipal.src=img1.src
    }
    if (num===2) {
        imgPrincipal.src=img2.src
    }
    if (num===3) {
        imgPrincipal.src=img3.src
    }
}

/* MUESTRA LAS DEMAS FOTOS DE LA GALAERIA */
    catalogo.style.display="none"
function abrirYCerrar(nombre){
    const catalogo = document.getElementsByClassName(nombre)[0]
    
    if (!catalogo.style.display) {
        catalogo.style.display = "none";
    }

    if (catalogo.style.display==="none") {
        catalogo.style.display="flex"
        return
    }
    else{
        catalogo.style.display="none"
    }
    
}
