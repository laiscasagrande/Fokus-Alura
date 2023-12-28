const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button') // all é para pegar mais de um elemento
const musicaFocoInput = document.querySelector('#alternar-musica')
const iniciarOuPausarBT = document.querySelector('#start-pause span')// o span junto serve para referenciar a palavra começar
const iniciarOuPausarBtIcone = document.querySelector(".app__card-primary-butto-icon") 
const tempoNaTela = document.querySelector('#timer')

const musica = new Audio('sons/luna-rise-part-one.mp3') 
const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3')
const startPauseBT = document.querySelector('#start-pause')
musica.loop = true //ficar tocando o tempo inteiro

let tempoDecorridoEmSegundos = 5
let = intervaloId = null

musicaFocoInput.addEventListener('change', () => { //o change serve para checkbox, para alternar, mais de uma opção
    if (musica.paused) { //se a música estiver pausada, ela dá play (true or false)
        musica.play()
    } else {
        musica.pause() //se estiver play, pausa
    }
    
}) 

focoBt.addEventListener('click', () => {

   // html.setAttribute('data-contexto', 'foco') trocamos por uma função
   // banner.setAttribute('src', '/imagens/foco.png') //o setAttribute serve para modificar om valor de um atributo. Ele aceita dois argumentos: o primeiro é o nome do atributo que queremos definir ou modificar, e o segundo é o valor que queremos atribuir a esse atributo.
   alterarContexto('foco')
   focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})
longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})
//só criamos a função porque o nome da cor e da imagem tem o mesmo nome
function alterarContexto(contexto) {
    botoes.forEach(function (contexto){ //adicionamos a função contexto dentro do forEach e removemos. Colocamos a função porque os botões estão utilizandi-as
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            // o inner é uma função para textos no js
            titulo.innerHTML = ` 
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
            case "descanso-curto":
                titulo.innerHTML = `
                Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
                ` 
                break;
            case "descanso-longo":
                titulo.innerHTML = `
                Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
                `
            default:
                break;

    }
}
// eu só posso definir um evento de click depois que ela for definida. Não posso colocar lá em cima

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        audioTempoFinalizado.play()
        alert('Tempo finalizado!')
        zerar()
        return// parar o código. Se eu não colocar, ele vai dar o alerta, mas o código vai continuar

    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

//startPauseBt.addEventListener('click', iniciarOuPausar)


startPauseBT.addEventListener('click', iniciarOuPausar)// só vai acontecer depois que for clicado


function iniciarOuPausar() {
    if (intervaloId) {
        audioPausa.play();  
        zerar()
        return // early return -- circuit breaker
    }
    audioPlay.play();  
    intervaloId = setInterval(contagemRegressiva, 1000)   //o setInterval vai sempre executar um método dentro de um período de tempo
    iniciarOuPausarBT.textContent = "Pausar"
}


function zerar () { //para fazer o alerta parar de exibir a mensagem mais de uma vez
    clearInterval(intervaloId) //interromper o intervaloId
    iniciarOuPausarBT.textContent = "Começar"
    iniciarOuPausarBtIcone.setAttribute('src', `/imagens/play_arrow.png`)
    intervaloId = null
}

function mostrarTempo() {
    const tempo = tempoDecorridoEmSegundos
    tempoNaTela.innerHTML = `${tempo}`
}

mostrarTempo()