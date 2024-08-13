import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {type : String, required : true},
    name: {type: String, required: true},
    username : {type: String, required: true},
    
    image : {type: String, required : true},
    onboarded : {
        type : Boolean, default : false
    },

 
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;