import axios from 'axios';

export const fetchSwapi = () => ({
  type: 'swap_fetch'
})

export const fetchSwapiAction = () => {
  return (dispatch) => {
    dispatch(fetchSwapi())
    axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=1c9c8795&s=avenger')
    .then(res =>{
      dispatch({
        type: 'swap_fetch_succ',
        payload: res.data.Search
      })
    })
    .catch(err =>{
      dispatch({
        type: 'swap_fetch_err'
      })
      throw err
    })
  }
}

export const fetchProfileData = (params) => {
  console.log(params,'<===================X');
  return dispatch => {
    dispatch({
      type: 'FETCH_SWAPI_DETAIL'
    })
    axios.get(params)
    .then(res => {
      // console.log(res, `<=================== res ==================`);
      dispatch({
        type: 'FETCH_SWAPI_DETAIL_SUCCESS',
        payload: res.data
      }) 
    })
    .catch(err => {
      dispatch({
        type: 'FETCH_SWAPI_DETAIL_FAILED'
      })  
      throw err
    })
  }
}

export const updateUrlDetailAction = urlDetail => ({
  type: 'UPDATE_URL_DETAIL',
  payload: urlDetail
})

export const clearSwapiAction = () => ({
  type: 'CLEAR_SWAPI_DATA'
})
