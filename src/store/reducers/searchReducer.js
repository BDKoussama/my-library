const searchReducer = (state = {} , action ) => {

    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                books : action.payload
                };
        break;
        default:
            return state ; 
            break;
    }

};

export default searchReducer ; 
