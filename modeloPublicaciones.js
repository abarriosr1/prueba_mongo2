const mongoose=require('mongoose');

const PublicacionesSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            require:true
        },
        descripcion:{
            type:String
        },
        author:{
            type:String
            //type:mongoose.Types.ObjectId
        }
    },
    {timestamps:true, versionKey:false}
)


const Publicaciones=new mongoose.model('publicaciones', PublicacionesSchema)

module.exports={Publicaciones}