import React from "react";
import "./css/ContentHeader.css";
import { Link } from "react-router-dom";


class ContentHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="card-profil">
        <div className="contain">
          <div className="card-photo secound text-left">
             <h1>WELLCOME TO THE LIST MOVIE 2020</h1>
             <Link to="/Explore" className="btn btn-info btn-lg card-photo-btn">
                Explore
              </Link>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default ContentHeader;
