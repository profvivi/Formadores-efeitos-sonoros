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
  };
