
const mario = document.querySelector ('.mario'); /*para acessar o elemento*/
const pipe = document.querySelector ('.pipe'); /*||*/


const jump = () => {
    mario.classList.add ('jump'); /*add a class junmp no element mario para ele pular , 
    pois acontece uma vez só*/

setTimeout(() => {
        mario.classList.remove ('jump');/*para remover a class jump para que posso acionala de novo*/
    } , 400);  
}

const loop = setInterval (() => {

    console.log ('loop');

    const pipePosition = pipe.offsetLeft; //position do deslocamento da esquerda 
    const marioPosition = +window.getComputedStyle (mario).bottom.replace ('px','');
    
    console.log (marioPosition);

    if (pipePosition <= 118 && pipePosition > 0 && marioPosition < 60 ) {

        pipe.style.animation = 'none'; //se aposition pipe for 118 animation para
        pipe.style.left = `${pipePosition}px`; // o valor do pipePosition

        // ele vai parar primeiro a animaçao e no local da posiçao

        mario.style.animation = 'none'; //sim o botton do mairo for menor que 60 ele para
        mario.style.bottom = `${marioPosition}px`;

        mario.src= 'perdeu.gif'; //a img mudara qdo encostar no tubo
        mario.style.width = '80px'

        clearInterval (loop);
    }

},20);

document.addEventListener ('keydown' , jump);
/*evento de kaydaw é evento quando press qqer tecla ele faz a açao , que é a funçao jump*/ 