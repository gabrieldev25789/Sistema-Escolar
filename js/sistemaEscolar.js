const buttons = document.querySelectorAll(".button")
const alunos = document.querySelectorAll(".aluno")

const buttonSala1 = document.querySelector("#abrir-sala1")
const sala1 = document.querySelector("#sala1")

const buttonSala2 = document.querySelector("#abrir-sala2")
const sala2 = document.querySelector("#sala2")

const buttonSala3 = document.querySelector("#abrir-sala3")
const sala3 = document.querySelector("#sala3")

const buttonSala4 = document.querySelector("#abrir-sala4")
const sala4 = document.querySelector("#sala4")

const calcularMediaBtn = document.querySelector("#calcular-media")
const mediaText = document.querySelector("#media-text")

const maiorNotaBtn = document.querySelector("#maior-nota-btn")
const maiorMedia = document.querySelector("#mostrar-maior-media")
maiorNotaBtn.classList.remove("hide")


function abrirSalas(abrir, fechar1, fechar2, fechar3, btn, btn1, btn2, btn3){
        maiorNotaBtn.classList.add("hide")

       const isHidden = abrir.classList.contains("hide");

        fechar1.classList.add("hide")
        fechar2.classList.add("hide")
        fechar3.classList.add("hide")

        buttonSala1.textContent = "ABRIR SALA 1"
        buttonSala2.textContent = "ABRIR SALA 2"
        buttonSala3.textContent = "ABRIR SALA 3"
        buttonSala4.textContent = "ABRIR SALA 4"

        if (isHidden) {
        // Abre a sala selecionada
        abrir.classList.remove("hide")
        btn.textContent = "FECHAR SALA"
        btn1.classList.add("hide")
        btn2.classList.add("hide")
        btn3.classList.add("hide")
        } else {
        // Fecha a sala se ela já estiver aberta
        abrir.classList.add("hide")
        btn1.classList.remove("hide")
        btn2.classList.remove("hide")
        btn3.classList.remove("hide")
        }
}

buttonSala1.addEventListener("click", () =>{
    abrirSalas(sala1, sala2, sala3, sala4, buttonSala1, buttonSala2, buttonSala3, buttonSala4)
})

buttonSala2.addEventListener("click", () =>{
    abrirSalas(sala2, sala1, sala3, sala4, buttonSala2, buttonSala1, buttonSala3, buttonSala4)
})

buttonSala3.addEventListener("click", () =>{
    abrirSalas(sala3, sala2, sala1, sala4, buttonSala3, buttonSala1, buttonSala2, buttonSala4)
})

buttonSala4.addEventListener("click", () =>{
    abrirSalas(sala4, sala2, sala3, sala1, buttonSala4, buttonSala1, buttonSala2, buttonSala3)
})

const buttonsSala = [buttonSala1, buttonSala2, buttonSala3, buttonSala4]

buttonsSala.forEach((btnSala)=>{
    btnSala.addEventListener("click", () =>{
    calcularMediaBtn.classList.toggle("hide")
    mediaText.classList.toggle("hide")
    mediaText.textContent = ""
    })
})

const medias = []

function mediaAlunos(sala){

   const salaAluno = sala.querySelectorAll(".aluno")

    salaAluno.forEach((aluno) => {
        const mediaTexto = aluno.lastElementChild.textContent; 

        const numero = parseFloat(mediaTexto.replace("Média: ", ""));

        medias.push(numero)
    })
        return medias
}

function calcularMedia(sala){
    const medias = mediaAlunos(sala)
    const qtdNotas = medias.length
    const soma = medias.reduce((acc, nota) => acc + nota, 0)
    return soma / qtdNotas
}

function mostrarMedia(sala, numeroSala){
    const media = calcularMedia(sala).toFixed(1)
    
    const divGeral = document.createElement("div")
    divGeral.id = "Div-geral"

    const mostrarMediaSala = document.createElement("h2")
    mostrarMediaSala.id = "mostrar-media-sala"
    mostrarMediaSala.textContent = `Quantidade de alunos da sala ${numeroSala}: ${sala.querySelectorAll(".aluno").length}, Média: ${media}`
    
    divGeral.appendChild(mostrarMediaSala)
    sala.appendChild(divGeral)
}
mostrarMedia(sala1, 1)
mostrarMedia(sala2, 2)
mostrarMedia(sala3, 3)
mostrarMedia(sala4, 4)

function calcularMediaGeral(){
    let start = 0 

    medias.forEach((media)=>{
        start += media 
    })
       const result = start / medias.length
       return result.toFixed(2)
}

calcularMediaBtn.addEventListener("click", () =>{
    const media = calcularMediaGeral()
    mediaText.textContent = `Média da escola 1: ${parseFloat(media).toFixed(1)}`
})

// FUNÇÃO QUE MOSTRA A MAIOR MÉDIA DA ESCOLA
function mostrarMaiorMedia(){
 let array = []

alunos.forEach((aluno)=>{
    
    const nomeAluno = aluno.firstElementChild.textContent
    const notaAluno = aluno.lastElementChild.textContent
       
    const notaAlunoNumber = parseFloat(notaAluno.replace("Média: ", ""));

    const objAluno = {nome: nomeAluno, nota: notaAlunoNumber}

    array.push(objAluno)

    })

    const maiorNota = array.reduce((max, atu) => {
    return max.nota > atu.nota ? max : atu
})

    return [`${maiorNota.nome},  ${maiorNota.nota}`]
}

// EVENTO DO BOTÃO DE MOSTRAR MAIOR MÉDIA
maiorNotaBtn.addEventListener("click", () => {
    const maiorNota = mostrarMaiorMedia()
    maiorMedia.textContent = `Maior média: ${maiorNota}`
})