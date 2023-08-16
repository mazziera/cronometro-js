const cronometro = document.querySelector('.container');

const campoMinutos = cronometro.querySelector('#minutos')
const campoSegundos = cronometro.querySelector('#segundos');
const campoMilisegundos = cronometro.querySelector('#milisegundos');

const botaoIniciar = cronometro.querySelector('#botao-iniciar');
const botaoPausar = cronometro.querySelector('#botao-pausar');
const botaoContinuar = cronometro.querySelector('#botao-continuar');
const botaoResetar = cronometro.querySelector('#botao-resetar');


let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let intervalo;
let cronometroIniciado = false;

botaoIniciar.addEventListener('click', iniciarTemporizador);

function iniciarTemporizador(){

    intervalo = setInterval(() =>{

        if (!cronometroIniciado){
            milisegundos += 10;

            if (milisegundos === 1000){
                segundos++;
                milisegundos = 0;
            }

            if (segundos === 60){
                minutos++;
                segundos = 0;
            }

            campoMinutos.textContent = formatarTextoDoTempo(minutos);
            campoSegundos.textContent = formatarTextoDoTempo(segundos);
            campoMilisegundos.textContent = milisegundos;
        }
    }, 10);

    botaoIniciar.style.display = 'none';
    botaoPausar.style.display = 'block';
};

botaoPausar.addEventListener('click', pausarTemporizador);

function pausarTemporizador(){
    cronometroIniciado = true;

    botaoPausar.style.display = 'none';
    botaoContinuar.style.display = 'block';
};

botaoContinuar.addEventListener('click', continuarTemporizador);

function continuarTemporizador(){
    cronometroIniciado = false;

    botaoContinuar.style.display = 'none';
    botaoPausar.style.display = 'block';
};

botaoResetar.addEventListener('click', limparTemporizador);

function limparTemporizador(){
    clearInterval(intervalo);
    minutos = 0;
    segundos = 0;
    milisegundos = 0;

    campoMinutos.textContent = formatarTextoDoTempo(minutos);
    campoSegundos.textContent = formatarTextoDoTempo(segundos);
    campoMilisegundos.textContent = 0;

    botaoIniciar.style.display = 'block';
    botaoPausar.style.display = 'none';
    botaoContinuar.style.display = 'none';
    botaoResetar.style.display = 'block';
};

function formatarTextoDoTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
};

