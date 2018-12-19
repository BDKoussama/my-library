export const addBookToLibrary = (list) => {
    return ( dispatch , getState ) => {
        const book = getState().book.selectedBook;
        if(list === 'library'){
            dispatch({ type : 'BOOK_ADDED_TO_LIBRARY' , payload : book })
        }else{
            dispatch({ type : 'BOOK_ADDED_TO_WISHLIST' , payload : book })
        }
    }
}

export  const closeAlert = () => {
    return (dispatch , getState) => {
        dispatch({ type : 'CLOSE_ALERT' })
    }
}

export const deleteBook = (list , id) => {
    console.log(list , id);
    return (dispatch, getState) => {
        if(list === 'library'){
            dispatch({ type : 'DELETE_BOOK_FROM_LIBRARY', id: id });
        }else{
            dispatch({ type : 'DELETE_BOOK_FROM_WISHLIST' , id: id });
        }
    }
}