const alunos = document.querySelectorAll(".aluno");

function mediaAlunos(){
    const medias = []

    alunos.forEach((aluno) => {
        const mediaTexto = aluno.lastElementChild.textContent; 

        const numero = parseFloat(mediaTexto.replace("Média: ", ""));

        medias.push(numero)
    })

        return medias
    }



function calcularMedia(){
    const mediaNotas = mediaAlunos()

    const qtdNotas = mediaNotas.length 

    let calculo = 0

    mediaNotas.forEach((nota)=>{        
        calculo += nota 
    })

    const mediaSala = calculo / qtdNotas
    console.log(`quantidade de alunos da sala 1: ${qtdNotas} alunos, média da sala 1: ${(mediaSala.toFixed(1))}`)

}

calcularMedia()