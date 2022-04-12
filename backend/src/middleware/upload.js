const multer = require("multer")


//queremos que se guarde no en el disco sino en el memory storage para luego enviarlo al servicio en la nube
const storage = multer.memoryStorage() //se guarda en la ram 
const upload = multer({storage:storage})//recordar multer es un middleware anade ciertas capas a ciertas rutas que necesitemos

module.exports={upload}