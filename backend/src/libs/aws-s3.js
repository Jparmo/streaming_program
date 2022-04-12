const AWS = require("aws-sdk")
const { aws_bucket_name } = require("../config")
const path = require("path")
const uuid = require("uuid")
//instancia
const s3 = new AWS.S3()

function uploadFile(file,name){
    const ext = path.extname(name)
    const key = uuid.v4()+ext // esto va generar un nombre que no se repita
    //necesitamos un buffer para subir un archivo, podemos usar s3 upload
    //se hace esto para usar asyn y await
    return new Promise((resolve,reject)=>{
        s3.upload({
            Bucket: aws_bucket_name,
            Key:key,
            Body:file //buffer
        },(err,data)=>{ //callback, trabaja con callback y no con promesas
            if(err){
                //promisraping es una forma de convertirlo en promesa
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
    
}

//vamos a crear una funcion para que nos descargue el archivo de la nube
function downloadFile(key){
    return new Promise((resolve,reject)=>{
        s3.getObject({
            Bucket: aws_bucket_name,
            Key:key
        },(err,data)=>{
            if(err){
                //promisraping es una forma de convertirlo en promesa
                reject(err)
            }else{
                resolve(data)
            }
     })
    })
}

module.exports={uploadFile, downloadFile}