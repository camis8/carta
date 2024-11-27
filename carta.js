/**
 * Sorteio de uma Carta
 * Exemplo de uso de um vetor
 * @author camila
 */

function sortear () {
let nipes = ['♥','♦','♣','♠']
let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
// sorteio do índice do vetor
let nipeSorteado = nipes[Math.floor(Math.random()*4)]
let faceSorteada = faces[Math.floor(Math.random()*13)]

//console.log(`${faceSorteada} de ${nipeSorteado}`)    // 0,1,2,3
// Determinar a cor com base no nipe sorteado
let cor
if (nipeSorteado === '♥' || nipeSorteado === '♦') {
    cor = '#ff0000'
} else {
    cor = '#000'
} 
// renderizar o canto superior esquerdo da carta 
// a linha abixo adiciona a div identificando como 'SupEsq' a face e o nipe sorteado e também tags <div> adicionais
document.getElementById('supEsq').innerHTML = `<div>${faceSorteada}<div> <div>${nipeSorteado}</div>`
// a linha abaixo muda o css ref a tag identificada
document.getElementById('supEsq').style.color = cor

// renderizar o centro da carta
let cc = document.getElementById('centroCarta')
cc.innerHTML = `${nipeSorteado}`
cc.style.color = cor 

// renderiza o canto inferior direito da carta
document.getElementById('infDir').innerHTML = `<div>${faceSorteada}<div> <div>${nipeSorteado}</div>`
}

