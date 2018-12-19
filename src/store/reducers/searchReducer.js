const searchReducer = (state = {fetchError : false} , action ) => {

    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                books : action.payload,
                fetchError: false
                };
        break;
        case 'FETCH_DATA_FAILED':
            return {
                ...state,
                books : action.payload,
                fetchError : true
                };
        break;
        default:
            return state ; 
            break;
    }

};

export default searchReducer ; 
