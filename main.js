/*function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
   
}*/


/*
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
  }
  
  const listaDeTeclas = document.querySelectorAll('.tecla');
  
  let contador = 0; //loop infinito então
  
  //enquanto (condição)
  while (contador < listaDeTeclas.length) {
  
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1];
  
    //template string
    const idAudio = `#som_${efeito}`;
  
    console.log(idAudio);//imprimir o contador várias vezes
  
    tecla.onclick = function () {
      tocaSom(idAudio);
    }
    contador = contador + 1; //então conta
  
    console.log(contador);//imprimir o contador várias vezes
  };*/

  function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
