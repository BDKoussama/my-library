export const fetchBooks = (title) => {
    return (dispatch , getState , {axios}) => {
        let data = [];
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&maxResults=40`)
        .then((response) => {
            for (var i = 0 ; i < response.data.items.length; i++) {
                var item = response.data.items[i];
                console.log(item);
                let { title , authors , imageLinks , description , language , pageCount , publisher } = item.volumeInfo ; 
                data[i] = { 
                            id : item.id,
                            title , 
                            author : authors ? authors[0] : 'Unknow Author',
                            img :    imageLinks ? imageLinks.smallThumbnail : false,
                            thumbnail : imageLinks ? imageLinks.thumbnail : false,
                            description : description ? description : 'No description',
                            language,
                            pageCount,
                            publisher
                         } ;
                }
            dispatch({type : 'FETCH_DATA_SUCCESS' , payload : title === '' ? [] : data})
        }).catch((err)=>{
            dispatch({type : 'FETCH_DATA_FAILED'});
        })
    }
}

