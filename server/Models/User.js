import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    role : {
        type : String,
        required : true
    },
    designation:{
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    profileImg: {
        type : Buffer
    },
    noOfLeaves : {
        type : Number,
        default : 0
    }
});
const UserModel = mongoose.model('User', userSchema);
export default UserModel;
