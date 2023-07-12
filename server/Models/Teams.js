import mongoose from "mongoose";

const TeamsSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    teamLead: {
        type: String,
        required: true
    },
    teamMembers: [
        {
            _id: {
                type: String,
                required: true
            },
            userName:{
                type: String,
                required: true
            }

        }
    ]
})


const TeamSchema = new mongoose.model("TeamSchema", TeamsSchema);
export default TeamSchema; 