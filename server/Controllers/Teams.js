import TeamSchema from "../Models/Teams.js";

export const getAllTeams = async(req,res) =>{
    try{
        const allTeams = await TeamSchema.find();
        res.status(200).json(allTeams);
    }catch(error){
        console.log(`here is the error:${error}`)
    }
}

export const postTeam = async(req,res) =>{
    try{
        const newTeam = new TeamSchema(req.body);
        await newTeam.save();
        res.status(200).json("New Team added sucessfully")
    }catch(error){
        console.log(`Here is the error:${error}`)
    }
}


export const updateTeam = async(req,res) =>{
    try{
        const Teamid = req.body._id;
        const Team = await TeamSchema.findById(Teamid)
        //below two lines are wrong we will update when required.
        Team = new TeamSchema(req.body);
        await Team.save();
        res.status(200).json("Team Updated sucessfully")
    }catch(error){
        console.log(`Here is the error:${error}`)
    }
}
export const deleteTeam = async(req,res) =>{
    try{
        const teamid = req.body
        await TeamSchema.findByIdAndDelete(teamid);
        res.status(200).json("Deleted Team sucessfully");
    }catch(error){
        console.log(`Here is the error:${error}`)
    }
}