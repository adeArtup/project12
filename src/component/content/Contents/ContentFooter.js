import React, { Component, Fragment } from "react";
import "./css/ContentHeader.css";

class ContentFoot extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="title-card ">
          Past Meetups
          <div className="l-right">See all</div>
        </div>
        <div className="card-content-fth ">
          <div className="card pmee sec">
            <div className="card-body">
              <h5 className="card-title">2 Maret 2020</h5>
              <hr />
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <label>0 views</label>
              <br />
              <a href="#" className="card-link btn btn-sm btn-info">
                View
              </a>
            </div>
          </div>
          <div className="card pmee sec">
            <div className="card-body">
              <h5 className="card-title">2 Maret 2020</h5>
              <hr />
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <label>0 views</label>
              <br />
              <a href="#" className="card-link btn btn-sm btn-info">
                View
              </a>
            </div>
          </div>
          <div className="card pmee sec">
            <div className="card-body">
              <h5 className="card-title">2 Maret 2020</h5>
              <hr />
              {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <label>0 views</label>
              <br />
              <a href="#" className=" card-link btn btn-sm btn-info">
                View
              </a>
            </div>
          </div>
        </div>

        <div className="line-bt"></div>
        <div className="cc-cr">Copyright Hacktiv8 2018</div>
      </Fragment>
    );
  }
}

export default ContentFoot;
