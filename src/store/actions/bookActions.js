export const selectBook = (id) => {
    return (dispatch , getState ) => {
        const books = getState().search.books;
        let selectedBook = books.filter(item => item.id === id);
        dispatch({type : 'BOOK_SELECTED_SUCCESS' , payload : selectedBook[0] });
    }
}
