import mongoose from 'mongoose';
const adminSchema = mongoose.Schema({
    adminName: {
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
    }
});
const Admin = mongoose.model('Admin', adminSchema);
export default Admin;
