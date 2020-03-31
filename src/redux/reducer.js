const appStore = {
  swapiD: {
    loading: false,
    data: []
  },
  selectedProfile: {
    loading: false,
    data: {},
    urlDetail : 'https://www.omdbapi.com/?i=tt3896198&apikey=1c9c8795&s=avenger'
  }
};

const app = (state = { ...appStore }, action) => {
  switch (action.type) {
    case "swap_fetch":
      return {
        ...state,
        swapiD: {
          ...state.swapiD,
          loading: true
        }
      };

    case "swap_fetch_succ":
      // console.log(action);
      return {
        ...state,
        swapiD: {
          ...state.swapiD,
          loading: false,
          data: action.payload
        }
      };

    case "swap_fetch_err":
      return {
        ...state,
        swapiD: {
          ...state.swapiD,
          loading: false
        }
      };
    case "FETCH_SWAPI_DETAIL":
      return {
        ...state,
        selectedProfile: {
          ...state.selectedProfile,
          loading: true
        }
      };
    case "FETCH_SWAPI_DETAIL_SUCCESS":
      
      return {
        ...state,
        selectedProfile: {
          ...state.selectedProfile,
          loading: false,
          data: action.payload
        }
      };
    case "FETCH_SWAPI_DETAIL_FAILED":
      return {
        ...state,
        selectedProfile: {
          ...state.selectedProfile,
          loading: false
        }
      };
  //   case "UPDATE_URL_DETAIL": {
  //     console.log(action.payload,'<=================');
  //     return {
  //       ...state,
  //       selectedProfile: {
  //         ...state.selectedProfile,
  //         urlDetail: action.payload
  //       }
  //     };
  //   }

  //   case "CLEAR_SWAPI_DATA":
  //     return {
  //       ...state,
  //       selectedProfile: appStore.selectedProfile,
  //       swapiD: appStore.swapiD
  //     };
    default:
      return state;
  }
};

export default app;
