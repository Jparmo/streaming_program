const express = require("express")
const { upload } = require("../middleware/upload")
const VideoService = require('../services/videos')


function videos(app){
    const router = express.Router()
    app.use("/videos",router)

    const videoService = new VideoService()

    router.get("/", async (req,res)=>{
        const videos = await videoService.getAll()
        return res.json(videos)
    })

    router.post("/", async (req,res)=>{
        const video = await videoService.create(req.body)
        return res.json(video)
    })

    router.put('/:id', async(req,res)=>{
        const id = Number.parseInt(req.params.id)
        const video = await videoService.update(id,req.body)
        return res.json(video)
    })

    router.delete('/:id', async(req,res)=>{
        const id = Number.parseInt(req.params.id)
        const video = await videoService.delete(id)
        return res.json(video)
    })
}

module.exports = videos