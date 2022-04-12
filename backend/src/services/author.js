const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

class Author{
    async getAll(){
        const authors = await prisma.author.findMany({
            include:{
                videos:true
            }
        })
        return authors
    }

    
}

module.exports = Author