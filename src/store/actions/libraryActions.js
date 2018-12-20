export const addBookToLibrary = (list,id) => {
    console.log(id);
    return ( dispatch , getState ) => {
        const book = getState().search.books.filter(item => item.id == id);
        console.log(book);
        if(list === 'library'){
            dispatch({ type : 'BOOK_ADDED_TO_LIBRARY' , payload : book[0] })
        }else{
            dispatch({ type : 'BOOK_ADDED_TO_WISHLIST' , payload : book[0] })
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