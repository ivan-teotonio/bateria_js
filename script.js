//linha 1 função recebe o propio evento o event
document.body.addEventListener('keyup', (event) => {
  playSound(event.code.toLowerCase())
})//aperta a tecla e solta

//vento para o botão tocar a sequencia digitada
// afunção vai ter que saber o que eu digitei
//value para pegar o que eu digitei
//verifica se digitou
//pega a string e transforma num array
//coloca o array numa função
document.querySelector('.composer button').addEventListener('click', () => {
   let song = document.querySelector('#input').value
   console.log("música", song)

   if(song !== ""){
     let songArray = song.split('')
     playComposition(songArray)
   }
})

//função para tocar o som
//linha indetificar o que precisa
//seleciona o arquivo de audio de acordo com o que digitou
//verificar se digitou alguma coisa
//pega o id da tecla digitada
//se ele achou o keyelement
//vai adicionar umas class no html
//adiciona um setTimeout de 300 milisegundos que remove a class
//quando apertar a tecla com o current time ele zera o audio
//para resolver um bug
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyLement = document.querySelector(`div[data-key="${sound}"]`)
   
    if(audioElement){
        audioElement.currentTime = 0
        audioElement.play();
    }
  
    if(keyLement){
       keyLement.classList.add('active')
       setTimeout(() => {
          keyLement.classList.remove('active')
       }, 300)
    }
}
//fazer um lupping para executar cada item de uma vez
//colocar um interalo entre cada letra
function playComposition(songArray){
    let wait = 0
   for(let songItem of songArray){
     setTimeout(() => {
        playSound(`key${songItem}`)
     },wait)
     //logo depóis eu dou um wait e adiciono 250 nele
     wait += 250
     
   }
}