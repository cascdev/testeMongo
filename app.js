// esta aplicação tem o objetivo apenas de testar a conexão com o mongodb
const express = require('express')
const mongoose = require('mongoose')

const app =  express()

mongoose.connect('mongodb://localhost:27017/teste_mongo', { useNewUrlParser: true})
    .then(() => { console.log('Mongoo está conectado!') }).catch(err => { console.log(err)})

// teste de inserção/persistência de um dado no banco
const Dog = mongoose.model('Dog', { name: String})  //Model

const caozinho = new Dog({ name: 'Bob' })  // Instancia do model acima e salva no banco
caozinho.save().then(() => console.log('AuAu!'))

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
})