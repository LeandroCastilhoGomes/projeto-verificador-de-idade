function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsexo = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','imagens/bebe-m.png' )
            } else if (idade < 21) {
                //joven
                img.setAttribute('src','imagens/jovem-m.png' )
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src','imagens/adulto-m.png' )
            } else {
                //idoso
                img.setAttribute('src','imagens/idoso-m.png' )
            }
        } else if (fsexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/bebe-f.png' )
            } else if (idade < 21) {
                //joven
                img.setAttribute('src','imagens/jovem-f.png' )
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src','imagens/adulto-f.png' )
            } else {
                //idoso
                img.setAttribute('src','imagens/idoso-f.png' )
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = ( `&#128073;&#127998; ${genero} com ${idade} anos &#128072;&#127998;`)
        res.appendChild(img)
    }
    
}