import React from "react";
import Header from "../../header";
import CoHead from "../../content/Contents/ContentHeader";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  fetchSwapiAction,
  fetchProfileData,
  updateUrlDetailAction
} from "../../../redux/action";

import { Link } from "react-router-dom";
import "./explore.css";

class Explorer extends React.Component {
  
  componentDidMount() {
    
    this.props.fetchSwapiAction();
    // this.props.fetchProfileData(this.props.urlDetail)
    
  }

  selectProfile = (urlDetail) => {
    this.props.updateUrlDetailAction(urlDetail)
  };

  render() {
  
    return (
      <React.Fragment>
        <Header />
        <CoHead />

        {/* <div className="row"> */}
        <div className="card-content-fth ">
          {this.props.swapiD.map(data => {
            const url =
              "https://www.omdbapi.com/?apikey=1c9c8795&t="+data['Title'];
            
            return (
              <div className="card pmee sec">
                <div className="card-body">
                  <h5 className="card-title">{data["Title"]}</h5>
                  <hr />
                  <h6 className="card-subtitle mb-2 text-muted">
                    {data["Year"]}
                  </h6>
                  <p className="card-text">
                    <img
                      src={data["Poster"]}
                      style={{ width: "220px", height: "200px" }}
                    />
                  </p>
                  <label>0 views</label>
                  <br />
                  <Link
                    to={{pathname:`./Detail/${data['Title']}`}}
                    className="btn btn-info btn-sm card-photo-btn"
                    onClick={() => this.selectProfile(url)}
                  >
                    View Detail
                  </Link>
                </div>
              </div>
              // </div>
              // </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  swapiD: state.swapiD.data,
  urlDetail: state.selectedProfile.urlDetail
});
const mapDispatchToProps = dispatch => ({
  fetchSwapiAction: () => dispatch(fetchSwapiAction()),
  // fetchProfileData: () => dispatch(fetchProfileData()),
  updateUrlDetailAction: () => dispatch(updateUrlDetailAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
