// Pegando os elementos HTML
const spanValor = document.getElementById('valor')
const botaoMudar = document.getElementById('botao-mudar')

// Abrindo o database
var database = firebase.database()

// Pegando referencias do Database
const algumacoisa_ref = database.ref('/alguma-coisa')


// Toda vez que faz alguma modificação ou inicia
// Ele chama a função anonima
algumacoisa_ref.on('value', function(snapshot) {
    spanValor.innerText = snapshot.val() // Aqui muda o elemento HTML
    console.log(snapshot.val())
})


// Quando clica no botão mudar
botaoMudar.onclick = function() {
    const num = Math.random()
    algumacoisa_ref.set(num) // Aqui que modifica o banco
    alert('Mudou! ' + num)
}