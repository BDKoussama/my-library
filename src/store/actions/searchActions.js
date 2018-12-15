export const fetchBooks = (title) => {
    return (dispatch , getState , {axios}) => {
        let data = [];
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`)
        .then((response) => {
            for (var i = 0; i < response.data.items.length; i++) {
                var item = response.data.items[i];
                let { title , authors , imageLinks } = item.volumeInfo ; 
                data[i] = { 
                            id : item.id,
                            title , 
                            author : authors ? authors[0] : 'Unknow Author',
                            img :    imageLinks ? imageLinks.smallThumbnail : false 
                         } ;
                }
            dispatch({type : 'FETCH_DATA_SUCCESS' , payload : title === '' ? [] : data})
        }).catch((err)=>{
            console.log(err)
        })
    }
}