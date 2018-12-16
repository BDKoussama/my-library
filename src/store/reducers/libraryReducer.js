const libraryReducer = (state = [] , action ) => { 
    switch (action.type) {
        case 'BOOK_ADDED_TO_LIBRARY':
        let bookAlreadyInLibrary = false
        state.forEach(book => {
            bookAlreadyInLibrary =  book.id === action.payload.id ? true : false
        });
           let newState =  !bookAlreadyInLibrary ? [ ...state, action.payload ] : [...state]
           return newState ; 
            break;
        default:
            return state ; 
            break;
    }
}

export default libraryReducer ; 