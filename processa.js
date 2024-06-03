const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/form1', [body('nome').notEmpty().withMessage('O campo nome é obrigatório'),
    body('email').isEmail().withMessage('O campo email deve ser um email válido'),
    body('cpf').notEmpty().withMessage('O campo CPF é obrigatório'),
    body('data_nasc').isDate().withMessage('O campo data da nascimento é obrigatório'),
    body('sexo').notEmpty(),
])