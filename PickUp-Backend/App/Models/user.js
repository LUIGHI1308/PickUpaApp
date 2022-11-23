const mongoose = require('mongoose')

const mongoosePaginate = require ('mongoose-paginate-v2')

const UserScheme = new mongoose.Schema({

    name:{
        type: String
    },
    email:{
        type: String,
        unique: true,
    },
    rol:{
        type: String
    },
    password:{
        type: String
    }
},
{
    versionkey: false,
    timestamps: true
}
)
UserScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('user', UserScheme)