import React, { Component } from 'react'
import {connect} from 'react-redux';
import {deleteBook} from '../../store/actions/libraryActions';

class WishListItem extends Component {
    constructor(){
        super();
        this.handleDeleteBook = this.handleDeleteBook.bind(this);
    }
    handleDeleteBook = () => {
        this.props.deleteBook('wishlist' , this.props.book.id);
    }

  render() {
      const {book} = this.props;
    return (
      <li className="hover:text-indigo-dark  transition-normal ml-1 border-l border-grey-dark pl-4 wishlist">
			<div className='thumbnail-extra-small'>
				<div className=' bg-indigo remove-item hover:cursor-pointer' onClick={this.handleDeleteBook} ><strong style={ { marginTop : '-0.1em' } }>&times;</strong></div>
				<img src={ book.img ? book.img : './images/coverNotFound.jpg' } alt=""/>
			</div>
	  </li>
    )
  }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        deleteBook : (list,id) => dispatch(deleteBook(list,id))
    }
}

export default connect(null,mapDispatchToProps)(WishListItem) ;