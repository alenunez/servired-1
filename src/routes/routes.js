const express = require('express')
const path = require('path')
const router = express.Router()
router.get('/main', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
})
router.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/home.html'))
})
router.get('/BuscarEnvio', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/BuscarEnvio.html'))
})
router.get('/ProgramarEnvio', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/ProgramarEnvio.html'))
})
router.get('/CancelarOrden', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/cancelarOrden.html'))
})
router.get('/DetalleEnvio', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/detalleEnvio.html'))
})
router.get('/DetalleRastreo', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/detalleRastreo.html'))
})
module.exports = router