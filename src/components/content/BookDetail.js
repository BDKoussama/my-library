import React,{Component} from 'react'
import { connect } from 'react-redux';
import {addBookToLibrary} from '../../store/actions/libraryActions';

class BookDetail extends Component { 
    addToLibrary = () => {
        this.props.addBookToLibrary();
    }
  render(){
    const { selectedBook } = this.props ;
    return (
        <div className='book-detail' data-id = { selectedBook.id }>
            <div className='book-thumbnail'>
                <img src={ selectedBook.thumbnail ? selectedBook.thumbnail : './images/coverNotFound.jpg' } alt=""/>
            </div>
            <div className='book-info'>
                <h4 className='book-title'>
                    {selectedBook.title} 
                </h4>
                <p className='book-author text-grey-dark mt-2'>{selectedBook.author}</p>
                <p className='book-description text-sm text-indigo-darkest '> { selectedBook.description } </p>
                <button onClick={ this.addToLibrary } className="bg-indigo-dark hover:bg-indigo-darker text-white text-sm py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Library</button>
                <button className="bg-indigo-dark hover:bg-indigo-darker text-white text-sm py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Wishlist</button>
            </div>
        </div>
      )
  }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addBookToLibrary: () => dispatch(addBookToLibrary())
    }
}
export default connect(null,mapDispatchToProps)(BookDetail) ;
