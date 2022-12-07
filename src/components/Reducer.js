const reducer = (state , action) =>{
    switch(action.type){
        case "HOME":
            return {...state, hits : action.payload.hits , nbPages : action.payload.nbPages}
        case "FILTER_QUERY_ON":
            return {...state,filterOnValue:action.payload}
        case "FILTER_QUERY_BY":
            return {...state,sortByValue:action.payload}
        case "FILTER_QUERY_TIME":
            return {...state,timeBeforeValue:action.payload}
        case "SEARCH_QUERY":
            return {...state,query:action.payload}
        case "NEXT_PAGE":
            let pageNumInc = state.page + 1;

            if (pageNumInc >= state.nbPages) {
                pageNumInc = 0;
            }
            return {...state,page : pageNumInc}
        case "PREV_PAGE":
            let pageNum = state.page - 1;

            if (pageNum <= 0) {
              pageNum = 0;
            }
                return {...state,page : pageNum}
        default:
            return state
    }
}
export default reducer;