import TeamSchema from "../Models/Teams";

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
        

    }catch(error){
        console.log(`Here is the error:${error}`)
    }
}