import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
    employeeId: {
        type: String,
        required: true
    },
    empName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        requried: true
    },
    dateOfBirth:{
        type: Date,
        requried: true
    },
    phoneNumber:{
        type: Number,
        requried: true
    },
    leaves:{
        type: [
            {
                title:{
                    type: String,
                    required: true
                },
                reason:{
                    type: String,
                    required: true
                },
                fromDate:{
                    type: Date,
                    required: true
                },
                toDate:{
                    type: Date,
                    required: true
                },
                LeaveStatus:{
                    type: String,
                    requried: true
                }
            }
        ]
    },
    noOfLeaves:{
        type: Number,
        required: true,
    },
    profileImage:{
        type: Buffer,
        requried: true
    },
    timeSheets:{
        type:[
            {
                feature:{
                    type: String,
                    required: true
                },
                description:{
                    type: String,
                    required: true
                },
                productiveHrs:{
                    type: Number,
                    requried: true
                },
                timeSheetSatus:{
                    type: String,
                    requried: true
                },
                screenshots:{
                    type: Buffer,
                    required: true
                }

            }
        ]
    }
})

const Employee = mongoose.model("Employee",employeeSchema)
export default Employee;