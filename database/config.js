// importar el mongoose
const {mongoose}= require('mongoose');

//funcion que establece la conexion, es asincronica por el await
dbConnection= async()=>{
    try{
        await (mongoose.connect(process.env.MONGO_CNN))//contiene la cadena para establecer conexion
        console.log('conexion establecida', dbConnection)
    }catch(e){
        console.log(e)
    }


}

module.exports= dbConnection