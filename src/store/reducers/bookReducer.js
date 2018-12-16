const bookReducer = (state = {} , action ) => {

    switch (action.type) {
        case 'BOOK_SELECTED_SUCCESS':
            return {
                ...state,
                selectedBook : action.payload
            };
            break;
        default: 
            return state;
            break;
    }

}


export default bookReducer;