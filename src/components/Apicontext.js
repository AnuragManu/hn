import React, { useContext, useEffect ,useReducer} from 'react'
import reducer from './Reducer';


const baseUrl = 'https://hn.algolia.com/api/v1/'
let yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
let lastweek = new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000));
let lastmonth = new Date(new Date().getTime() - (30 * 24 * 60 * 60 * 1000));
function seconds_since_epoch(d){ 
  return Math.floor( d / 1000 ); 
}
const timeStamp = {
    "A" : seconds_since_epoch(0),
    "D" : seconds_since_epoch(yesterday),
    "W" : seconds_since_epoch(lastweek),
    "M" : seconds_since_epoch(lastmonth)
  }
const initialState = {
  nbPages: 0,
  page: 0,
  hits: [],
  query: "",
  filterOnValue: "story",
  sortByValue: "search_by_date",
  timeBeforeValue: "A",
};
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const fetchApiData = async (url)=>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({type : "HOME", 
            payload : {nbPages : data.nbPages , hits : data.hits}})
        } catch (error) {
            console.log(error);
        }
    };
    const searchPost = (searchQuery) => {
        console.log(searchQuery)
        dispatch({
          type: "SEARCH_QUERY",
          payload: searchQuery,
        });
      };
      
      const filterOn = (filterOnValue) => {
        dispatch({
          type: "FILTER_QUERY_ON",
          payload: filterOnValue,
        });
      };
      const filterBy = (sortByValue) => {
      dispatch({
        type: "FILTER_QUERY_BY",
        payload: sortByValue,
      });
    };
    const filterTime = (timeBeforeValue) => {
      dispatch({
        type: "FILTER_QUERY_TIME",
        payload: timeBeforeValue,
      });
    };

      const getNextPage = () => {
        dispatch({
          type: "NEXT_PAGE",
        });
      };
    
      const getPrevPage = () => {
        dispatch({
          type: "PREV_PAGE",
        });
      };

useEffect(()=>{
  let API_URL = `${baseUrl}${state.sortByValue}?query=${(state.query)}&tags=${state.filterOnValue}&numericFilters=created_at_i>=${timeStamp[state.timeBeforeValue]}&page=${state.page}`
    fetchApiData(API_URL)
  },[state.url,state.timeBeforeValue,state.sortByValue,state.query,state.filterOnValue,state.page])
    return (
        <AppContext.Provider value={{...state , searchPost , filterOn , filterBy , filterTime , getNextPage , getPrevPage}}>{children}</AppContext.Provider>
    )
}

const useGlobalCntext = () =>{
    return useContext(AppContext);
};

export { AppContext , AppProvider , useGlobalCntext };
