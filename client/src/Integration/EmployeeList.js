import axios from 'axios';
const API = `http://localhost:9000`
export const getAllUsers = async()=>{
    let response = await axios.get(`${API}/allUsers`);
    return response;
}
export const addUser = async(userObj)=>{
    let response = await axios.post(`${API}/addUser`,userObj);
    return response.data;
}