const spanValor = document.getElementById('valor')
const botaoMudar = document.getElementById('botao-mudar')


var database = firebase.database()

const algumacoisa_ref = database.ref('/alguma-coisa')

algumacoisa_ref.on('value', mudou)

function mudou(snapshot) {
    spanValor.innerText = snapshot.val()
    console.log(snapshot.val())
}





botaoMudar.onclick = function() {
    const num = Math.random()
    algumacoisa_ref.set(num)
    alert('Mudou! ' + num)
}