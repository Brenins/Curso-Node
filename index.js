var express = require('express');
var app = express()
const port = 3000
// responde com "hello world" quando uma requisição GET é feita para a homepage (localhost:3000)

// Utilizar Craze para template string com variaveis
app.get('/', function(req, res) {
  res.send(`Ouvindo GET na porta ${port}`);
});

app.listen(port, () => {
    console.log(`Exemplo ouvindo na porta ${port}`)
})

app.post("/", (req, res) => {
    res.send("Teste de Posts!!!!")
})



















//Exemplo Callback
 /*
function minhaFuncao(port, funcao){
    const minhaString = "Oii"

    funcao(port, minhaString)
}

function callback(port, minhaString){
    console.log({port, minhaString})
}) 

minhaFuncao(3000, callback)

*/