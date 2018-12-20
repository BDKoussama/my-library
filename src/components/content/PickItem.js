import React, { Component } from 'react'
import { connect} from 'react-redux' ;
import {addBookToLibrary} from '../../store/actions/libraryActions';


class PickItem extends Component {
  constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
      this.props.addBookToLibrary('wishlist',this.props.book.id);
  }
  render() {
    const {book , index} = this.props ;

    return (
        <div className="flex justify-start items-center p-5 px-6 w-full sm:w-1/2" style={ {backgroundColor:  index%2==0 ? '#D0E3E8' :  "#ECE7E9" } } >
            <div className='book-thumbnail-picks'>
                <img src={ book.thumbnail ? book.thumbnail : './images/coverNotFound.jpg' } alt=""/>
            </div>
            <div className="ml-4 mt-1 w-2/3">
                <p className="font-medium">{book.title}</p>
                <button onClick={ this.handleClick } className="shadow-md mt-3 bg-grey-lightest hover:bg-white text-indigo-darker text-xs py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Wishlist</button>
            </div>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBookToLibrary: (list,id) => dispatch(addBookToLibrary(list,id))
    }
}

export default connect(null,mapDispatchToProps)(PickItem) ; 