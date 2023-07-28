import "./team.css"

function Card({name,desc,editfunc}) {
    return ( <>
    
    <div className="card  box">

        <h3 className="head">{name}</h3>
        <p className="desc">{desc}</p>
        <div className="edit-btn" onClick={editfunc}><button>EDIT</button></div>
    </div>
    
    </> );
}

export default Card;