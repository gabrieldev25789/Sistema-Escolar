const buttonSala1 = document.querySelector("#abrir-sala1")
const sala1 = document.querySelector("#sala1")

const buttonSala2 = document.querySelector("#abrir-sala2")
const sala2 = document.querySelector("#sala2")

const buttonSala3 = document.querySelector("#abrir-sala3")
const sala3 = document.querySelector("#sala3")

const buttonSala4 = document.querySelector("#abrir-sala4")
const sala4 = document.querySelector("#sala4")

function abrirSalas(){

buttonSala1.addEventListener("click", () =>{
    if(sala1.classList.contains("hide")){
    buttonSala2.classList.add("hide")
    buttonSala3.classList.add("hide")
    buttonSala4.classList.add("hide")
    buttonSala1.textContent = "FECHAR SALA 1"
    } else{
    buttonSala2.classList.remove("hide")
    buttonSala3.classList.remove("hide")
    buttonSala4.classList.remove("hide")
    buttonSala1.textContent = "ABRIR SALA 1"
    }
    sala1.classList.toggle("hide")
})

buttonSala2.addEventListener("click", () =>{
    if(sala2.classList.contains("hide")){
    buttonSala1.classList.add("hide")
    buttonSala3.classList.add("hide")
    buttonSala4.classList.add("hide")
    buttonSala2.textContent = "FECHAR SALA 2"
    } else{
    buttonSala1.classList.remove("hide")
    buttonSala3.classList.remove("hide")
    buttonSala4.classList.remove("hide")
    buttonSala2.textContent = "ABRIR SALA 2"
    }
    sala2.classList.toggle("hide")
})

buttonSala3.addEventListener("click", () =>{
    if(sala3.classList.contains("hide")){
    buttonSala1.classList.add("hide")
    buttonSala2.classList.add("hide")
    buttonSala4.classList.add("hide")
    buttonSala3.textContent = "FECHAR SALA 3"
    } else{
    buttonSala1.classList.remove("hide")
    buttonSala2.classList.remove("hide")
    buttonSala4.classList.remove("hide")
    buttonSala3.textContent = "ABRIR SALA 3"
    }
    sala3.classList.toggle("hide")
})

buttonSala4.addEventListener("click", () =>{
    if(sala4.classList.contains("hide")){
    buttonSala1.classList.add("hide")
    buttonSala2.classList.add("hide")
    buttonSala3.classList.add("hide")
    buttonSala4.textContent = "FECHAR SALA 4"
    } else{
    buttonSala1.classList.remove("hide")
    buttonSala2.classList.remove("hide")
    buttonSala3.classList.remove("hide")
    buttonSala4.textContent = "ABRIR SALA 4"
    }
    sala4.classList.toggle("hide")
})
}

abrirSalas()

function mediaAlunos(sala){
    const medias = []

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


