const { ipcRenderer } = require('electron');
const timer = require('./timer');
const data = require('../../data');

let linkSobre = document.querySelector('#link-sobre');
let botaoplay = document.querySelector('.botao-play');
let tempo = document.querySelector('.tempo');
let curso = document.querySelector('.curso');

window.onload=()=>{

    data.pegaDados(curso.textContent)
    .then((dados)=>{
        
        tempo.textContent = dados.tempo;
    });
}

linkSobre.addEventListener('click' , function(){
    ipcRenderer.send('abrir-janela-sobre');
});

let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
botaoplay.addEventListener('click', function(){
    imgs = imgs.reverse();
    if(play ){
        timer.parar(curso.textContent);
        play = false;
    }else{
        timer.iniciar(tempo);
        play = true;
    }
    botaoplay.src = imgs[0];
});