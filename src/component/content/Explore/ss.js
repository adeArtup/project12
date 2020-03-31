import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchProfileData } from '../../redux/action';
import { Link } from 'react-router-dom';

// class NavBar extends React.Component {
  
//   componentDidUpdate(prevProps){
//     if(prevProps.urlDetail !== this.props.urlDetail){
//       this.props.fetchProfileData(this.props.urlDetail)   
//     }
//   }
  
//   componentDidMount(){
//     this.props.fetchProfileData(this.props.urlDetail)  
//   }
  
  
//   render(){
//     const { loadingProfile, selectedProfile } = this.props
    
//     return(
//       <div 
//         style={{ width: '100%', height: '100px', backgroundColor: 'cyan'}}
//       >
//         <p>selected Profile: {loadingProfile ? '...Loading': selectedProfile.name} </p>
        
//         <Link to="/about">go to about</Link>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   cartQuantity: state.cartQuantity,
//   selectedProfile: state.selectedProfile.data,
//   loadingProfile: state.selectedProfile.loading,
//   urlDetail: state.selectedProfile.urlDetail
// })

// const mapDispatchToProps = {
//   fetchProfileData,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

const NavBar = () => {
  const selector = useSelector((state) => ({
    cartQuantity: state.cartQuantity,
    selectedProfile: state.selectedProfile.data,
    loadingProfile: state.selectedProfile.loading,
    urlDetail: state.selectedProfile.urlDetail
  }))
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchProfileData(selector.urlDetail))
  }, [selector.urlDetail])
  
  return(
    <div 
      style={{ width: '100%', height: '100px', backgroundColor: 'cyan'}}
    >
      <p>selected Profile: {selector.loadingProfile ? '...Loading': selector.selectedProfile.name} </p>
      
      <Link to="/about">go to about</Link>
    </div>
  )
}

export default NavBar