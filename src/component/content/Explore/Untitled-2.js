const StarWars = () => {
    const selector = useSelector(state => ({
      swapiData: state.swapiData.data
    }))
      
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(fetchSwapiAction()) 
      
      return function cleanup(){
        dispatch(clearSwapiAction()) 
      }
    },[])
    
    const selectProfile = (urlDetail) => {
      dispatch(updateUrlDetailAction(urlDetail))
    }
    
    return (
      <React.Fragment>
        {
          selector.swapiData.map(data => {
            return (
              <ul>
                <li>
                  <p>Name: {data.name}</p>
                  <p>Height: {data.height}</p>
                  <button onClick={() => selectProfile(data.url)}> Select Profile </button>
                </li>
              </ul>
            )
          })
        }
      </React.Fragment>
    ) 
  }
  
  export default StarWars