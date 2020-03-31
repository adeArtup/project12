import React, { Component, Fragment } from "react";
import "./css/ContentHeader.css";
import ConsFoot from "./ContentFooter.js";


class ContentCons extends React.Component {
  render() {
    return (
      // <Fragment>
      <div className="card-bd">
        <div className="title-card ">Next Meetup</div>
        <div className="card-content">
          <div className="card-content-title">Awesome meetup and event</div>
          <p className="cc-date text-left">25 January 2020</p>
          <p className="cc-meet text-left">
            Hello, JavaScript & Node.js Ninjas!
            <br />
            Get ready for our montly meetup JakartaJS! This will be our fifth
            mettup of 2018!
            <br />
            The meetup format will contain some short stories and technical
            talks.
            <br />
            If you have a short announcement you'd like to share with the
            audience, you may do so during open mic announcements.
            <br />
            Remember to bring a photo ID to get through building security.
            <br />
            -----
            <br />
            See you there!
            <br />
            Best, Hengki, Giovanni, Sofian, Riza, Agung The Jakarta.JS
            Organizers
          </p>
        </div>
        <div className="title-card ">About Meetup</div>
        <div className="card-content-sec ">
          <p className="cc-about">
            Come and meet other developers interested in the JavaScript and it's
            library in the Greater Jakarta area.
            <br />
            Twitter: @Jakarta.JS and we use the hashtag #jakartajs
          </p>
        </div>
        <div className="title-card ">
          Members
          <div className="l-right">See all</div>
        </div>

        <div className="card-content-trd member">
          <div className="cc-circle"></div>
          <div className="cc-text">
            <label>Organizers</label>
            <div className="cc-text-2">
              <label>Adhy Wiranata</label>
              <label className="r-text-2">4 others.</label>
            </div>
          </div>
        </div>
        <ConsFoot/>
      </div>

      // </Fragment>
    );
  }
}

export default ContentCons;
