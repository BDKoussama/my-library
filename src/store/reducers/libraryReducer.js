const libraryReducer = (state = { library : [] , wishlist : [] , alert:false , alreadyExistAlert : false } , action ) => { 
    let bookAlreadyInLibrary = false ; 
    let newState = [] ; 
    switch (action.type) {
        case 'BOOK_ADDED_TO_LIBRARY':
            bookAlreadyInLibrary = checkBook(action.payload , state.library);
            newState =  !bookAlreadyInLibrary ? { ...state ,  library : [ ...state.library , action.payload ], alert: true } : {...state , alreadyExistAlert : true}
        return newState; 
    break;
        case 'BOOK_ADDED_TO_WISHLIST':
            bookAlreadyInLibrary = checkBook(action.payload , state.wishlist);
            newState =  !bookAlreadyInLibrary ? { ...state ,  wishlist : [ ...state.wishlist , action.payload ] , alert: true } : {...state ,  alreadyExistAlert : true}
        return newState; 
    break;    
        case 'CLOSE_ALERT':
        return {
            ...state,
            alert : false,
            alreadyExistAlert : false
        }
        case 'DELETE_BOOK_FROM_LIBRARY':
            return {
                ...state,
                library : state.library.filter(item => item.id !== action.id )
            };
        break;
        case 'DELETE_BOOK_FROM_WISHLIST':
        return {
            ...state,
            wishlist : state.wishlist.filter(item => item.id !== action.id )
        };
        break;
    break;
        default:
        return state ; 
    break;
    }
}

const checkBook = (selectedBook , arr) => {
    let bookAlreadyInArray = false ; 
    arr.forEach(book => {
        bookAlreadyInArray =  book.id === selectedBook.id ? true : false
    });
    return bookAlreadyInArray;
}

export default libraryReducer ; 
