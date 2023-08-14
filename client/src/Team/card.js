import { Link } from "react-router-dom";
import "./team.css";

function Card({ name, desc, editfunc, onClick }) {
  return (
    <>
      <div className="card-box">
        <Link to="/admin/team/team-members">
          <h3 className="head" onClick={onClick}>
            {name}
          </h3>
        </Link>
        <p className="desc">{desc}</p>
        <div className="edit-btn">
          <button onClick={editfunc}>EDIT</button>
        </div>
      </div>
    </>
  );
}

export default Card;
