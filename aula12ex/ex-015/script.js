function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //Pega o ano com 4 digitos
    var anoFormulario = document.getElementById('ano') 
    var resultado = document.getElementById('resultado')
    if (anoFormulario.value.length == 0 || Number(anoFormulario.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
} else {
    var formSexo = document.getElementsByName('sexo')
    var idade = ano - Number(anoFormulario.value)
    var gênero = ''
    var img =document.createElement('img')
    img.setAttribute('id', 'foto')
    if (formSexo[0].checked) {
        gênero = 'Homem'
        if (idade >= 0 && idade <= 10) {
            img.setAttribute('src', 'imagens/menino-crianca2.png')
        } else if (idade > 11 && idade <= 20){
            img.setAttribute('src', 'imagens/adolescente-homem.png')
        } else if (idade >= 21 && idade <= 38){
            img.setAttribute('src', 'imagens/homem-adulto.png')
        } else if (idade >= 39) {
            img.setAttribute('src', 'imagens/homem-idoso.png')
        } 
    } else if (formSexo[1].checked) {
        gênero = 'Mulher'
        if (idade >= 0 && idade <= 10) {
            img.setAttribute('src', 'imagens/menina-crianca.png')
        } else if (idade > 11 && idade <= 20){
            img.setAttribute('src', 'imagens/adolescente-mulher.png')
        } else if (idade >= 21 && idade <= 38){
            img.setAttribute('src', 'imagens/mulher-adulta.png')
        } else if (idade >= 39) {
            img.setAttribute('src', 'imagens/mulher-idosa.png')
        } 
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    resultado.appendChild(img)
}
}