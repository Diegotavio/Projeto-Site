const Express = require('express');
const app = Express();
const port = 3333;

app.get('/', (req,res) => {
    console.log("eai meus!");
 
    });
app.post('/hello', (req,res) => {
    console.log("Eai meu garoto");
});

app.listen(port, (req,res) => {
    console.log(`Servidor rodando na porta ${port}`);
});
    
module.exports = port




