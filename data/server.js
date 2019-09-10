

const express = require('express'); 
const router = express.Router(); 
const server = express(); 

const actionDB = require('./helpers/actionModel')
const projectsDB = require('./helpers/projectModel'); 



// ACTION req handlers


router.get('/', (req, res) => {
    res.status(201).json({ message: 'hello' }); 
    actionDB.get()
        .then(res => res.status(201).json({ api: 'up' }))
        .catch(err => res.status(500).json({ api: 'down' })); 
})

router.post('/', (req, res) => { 
    actionDB.insert()
        .then(res => res.status(201).json({ api: 'up' }))
        .catch(err => res.status(500).json({ api: 'down' })); 
})

router.put('/', (req, res) => {
    actionDB.update()
        .then(res => res.status(201).json({ api: 'up' }))
        .catch(err => res.status(500).json({ api: 'down' })); 
})

router.delete('/', (req, res) => {
    actionDB.remove()
        .then(res => res.status(201).json({ api: 'up' }))
        .catch(err => res.status(500).json({ api: 'down' })); 

})






// Projects req handlers


router.get('/', (req, res) => {
    projectsDB.get()
        .then(res => res.status(201).json({ api: 'up' }))
        .catch(err => res.status(500).json({ api: 'down' })); 
})

router.post('/', (req, res) => {
    projectsDB.insert()
        .then(res => res.status(201).json({ api: 'up' }))
        .catch(err => res.status(500).json({ api: 'down' })); 
})

router.put('/', (req, res) => {
    projectsDB.update()
        .then(res => res.status(201).json({ api: 'up' }))
        .catch(err => res.status(500).json({ api: 'down' })); 
})

router.delete('/', (req, res) => {
    projectsDB.remove()
        .then(res => res.status(201).json({ api: 'up' }))
        .catch(err => res.status(500).json({ api: 'down' })); 

})

module.exports = server; 