const mongoose = require('mongoose')

const DB_URI = 'mongodb://localhost:27017/PickUp'

/* mongodb://localhost:27017/PickUp */

module.exports = () =>{
     
    const connect = () =>{
        mongoose.connect(
            DB_URI,
            {

                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) =>{
                if (err){
                    console.log('DB: ERROR DE CONEXION')
                }
                else{
                    console.log('DB: Conexion establecida')
                }
            }
        )
    }
    
    connect();
        
}