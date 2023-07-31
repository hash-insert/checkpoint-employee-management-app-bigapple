import { Link } from "react-router-dom";
import "./team.css"

function Card({name,desc,editfunc,onClick}) {
  const showEmp=()=> {

  }
    return ( <>
    
    <div className="card  box">

      <h3 className="head" onClick={onClick}>{name}</h3>
        <p className="desc">{desc}</p>
        <div className="edit-btn" onClick={editfunc}><button>EDIT</button></div>
    </div>
    
    </> );
}

export default Card;