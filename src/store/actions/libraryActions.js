export const addBookToLibrary = () => {
    return ( dispatch , getState ) => {
        const book = getState().book.selectedBook;
        dispatch({ type : 'BOOK_ADDED_TO_LIBRARY' , payload : book })
    }
}