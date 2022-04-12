const express =  require("express")
const AuthorService = require("../services/author")



function authors(app){
    const router =  express.Router()
    app.use('/authors', router)

    const authorService = new AuthorService()

    router.get('/', async (req,res)=>{
        const auths = await authorService.getAll()
        return res.json(auths)
    })
}

module.exports=authors