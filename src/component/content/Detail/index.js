import React from "react";
import Header from "../../../component/header";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProfileData, clearSwapiAction } from "../../../redux/action";

class Detail extends React.Component {
  componentDidUpdate(prevProps) {
    // console.log(prevProps.urlDetail,'<===========U')
    if (prevProps.urlDetail !== this.props.urlDetail) {
      this.props.fetchProfileData(this.props.urlDetail);
    }
  }
  componentDidMount() {
    // console.log(this.props.urlDetail,'<===========U2')
    this.props.fetchProfileData(this.props.urlDetail);
  }

  componentWillUnmount() {
    this.props.clearSwapiAction();
  }

  // selectProfile = urlDetail => {
  //   this.props.updateUrlDetailAction(urlDetail);
  // };

  render() {
    // console.log(this.props.urlDetail)
    const { loadingProfile, dt } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div
          style={{
            width: "80%",
            height: "100%",
            margin: "0 auto",
            marginTop: "10vh",
            backgroundColor: "#f8f9fa"
          }}
        >
          <p style={{ textAlign: "center", }}>
            <h3>{loadingProfile ? "...Loading" : dt["Title"]} </h3>
            <h5>({dt["Year"]})</h5>
            <br/>
            <img src={dt["Poster"]} style={{ width: "320px", height: "300px" }} />
            <p style={{textAlign:'Justify',}}>
              {dt['Plot']}
            </p>
            <br/>
            <label>Cast Actors : <i>{dt['Actors']}</i> </label>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  dt: state.selectedProfile.data,
  loadingProfile: state.selectedProfile.loading,
  urlDetail: state.selectedProfile.urlDetail
});
const mapDispatchToProps = dispatch => ({
  clearSwapiAction: () => dispatch(clearSwapiAction()),
  fetchProfileData: params => dispatch(fetchProfileData(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
