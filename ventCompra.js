function aparecerMedios(){
    var medios = document.getElementById("container_medios")
    if(medios.style.display === "" || medios.style.display === "none"){
        medios.style.display="flex"
    }
    else{
        medios.style.display="none"
    }
}

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
let contador = 0
function arrastrarDerecha(){
    var containerImg= document.getElementsByClassName("container_img-holder")[0];
    var imagenes= document.getElementsByClassName("container_img-element")
    var cantImgs = imagenes.length-1
    const maxTranslate = cantImgs*-110
    
    if(contador<=maxTranslate)
        return
    else{
        contador-=110
        containerImg.style.transform=`translateX(${contador}%)`
    }
}

function arrastrarIzquierda(){
    var containerImg= document.getElementsByClassName("container_img-holder")[0];
    var imagenes= document.getElementsByClassName("container_img-element")
    var cantImgs = imagenes.length-1    
    if(contador>=0)
        return
    else{
        contador+=110
        containerImg.style.transform=`translateX(${contador}%)`
    }
}

let numCount= 0
function restar(){
    if(numCount<=0){
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