const{PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const uploadFile = require('../libs/aws-s3')

class Videos{
    async getAll() {
        const videos = await prisma.video.findMany() //encontrar todos
        return videos
    }
    async create(video){
        const newVideo = await prisma.video.create({
            data:video
            
        })
        return newVideo
    }

    async update(id,data){
        const update = await prisma.video.update({
            where:{
                id
            },
            data
        })

        return update
    }

    async delete(id){
        const deleted = await prisma.video.delete({
            where:{
                id
            }
        })
        return deleted
    }
}

module.exports = Videos