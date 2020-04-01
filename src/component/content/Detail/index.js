import React from "react";
import Header from "../../../component/header";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {
  fetchProfileData,
  updateUrlDetailAction,
  clearSwapiAction
  
} from "../../../redux/action";

class Detail extends React.Component {

  
  componentDidUpdate(prevProps){
    console.log(prevProps.urlDetail,'<===========U')
    if(prevProps.urlDetail !== this.props.urlDetail){
      this.props.fetchProfileData(this.props.urlDetail)   
    }
  }
  componentDidMount() {
    console.log(this.props.urlDetail,'<===========U2')
    this.props.fetchProfileData(this.props.urlDetail)  
  }

  componentWillUnmount() {
    this.props.clearSwapiAction();
  }

  // selectProfile = urlDetail => {
  //   this.props.updateUrlDetailAction(urlDetail);
  // };

  render() {
    console.log(this.props.urlDetail)
    const { loadingProfile, selectedProfile } = this.props
    return (
      <React.Fragment>
        <Header />
        <div style={{ width: '80%', height: '100px', margin:'0 auto', marginTop: "10vh", backgroundColor: '#f8f9fa'}} >
                        <p>Movie Title: {loadingProfile ? '...Loading': selectedProfile['Title']} </p>
                        
                </div>
        {/* <br />
        <div
          style={{
            width: "100%",
            marginTop: "10vh",
            borderTop: "1px solid #222"
          }}
        >
          <p>
            {this.props.swapiD.map(data => {
              return (
            
                <ul>
                  <li>
                    <p>Name: {data.name}</p>
                    <p>Height: {data.height}</p>
                    <button onClick={() => this.selectProfile(data.url)}>
                      {" "}
                      Select Profile{" "}
                    </button>
                  </li>
                </ul>
              )
            })}
          </p>
        </div> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  selectedProfile: state.selectedProfile.data,
  loadingProfile: state.selectedProfile.loading,
  urlDetail: state.selectedProfile.urlDetail
});
const mapDispatchToProps = dispatch => ({
 
  // updateUrlDetailAction: () => dispatch(updateUrlDetailAction()),
  clearSwapiAction: () => dispatch(clearSwapiAction()),
  fetchProfileData: (params) => dispatch(fetchProfileData(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
