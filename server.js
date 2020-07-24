const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const { PORT = 3000, HOST = 'localhost' } = process.env

const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(PORT, () => console.log(`Servidor arriba en: http://${HOST}:${PORT}`))
})