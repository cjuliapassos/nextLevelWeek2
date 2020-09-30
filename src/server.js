

//SERVIDOR
const express = require('express')
const server = express()

const {pageLanding,pageStudy,pageGiveClasses,saveClasses} = require('./pages')

//configurar nunjucks (TEMPLATES ENGINE)
const nunjucks = require('nunjucks')

nunjucks.configure('src/views',{
    express: server,
    noCache:true
})

//INICIO E CONFIG DO SERVIDOR
server
//receber os dados do req body
.use(express.urlencoded({extended: true}))
//consigurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy )
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//START DO SERVIDOR
.listen(5500)


