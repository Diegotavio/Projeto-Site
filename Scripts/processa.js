const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const { port } = require('server.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/form1', [body('nome').notEmpty().withMessage('O campo nome é obrigatório'),
    body('email').isEmail().withMessage('O campo email deve ser um email válido'),
    body('cpf').notEmpty().withMessage('O campo CPF é obrigatório'),
    body('data_nasc').isDate().withMessage('O campo data da nascimento é obrigatório'),
    body('sexo').notEmpty().withMessage('Por favor selecione seu sexo e prossiga'),
    body('estado_civil').notEmpty().withMessage('Por favor selecione seu estado civil e prossiga'),
    body('estado').notEmpty().withMessage('O campo estado é obrigatório'),
    body('municipio').notEmpty().withMessage('O campo municipio é obrigatório'),
    body('telefone').notEmpty().withMessage('O campo telefone é obrigatório')
], 

//caso for preenchido errado o formulário
(req,res) => {
    const erro = validationResult(req);
    if(!erro.isEmpty()) {
        return res.status(400).json({erro:erro.array() });
    }

    //caso for preenchido corrretamente
    res.send('Formulário preenchido com sucesso!')
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});