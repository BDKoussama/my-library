import React, { Component } from 'react'
import {connect} from 'react-redux';
import {deleteBook ,changeBookState } from '../../store/actions/libraryActions';

class LibraryBook extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDeleteBook = this.handleDeleteBook.bind(this);
        this.state = {
            stateList : false,
            bgColor : 'libre-bg-grey'
        }
    }
    handleClick = () => {
        this.setState({
            stateList : !this.state.stateList
        });
    }
    handleChange = (e) => {
        this.setState({ 
            readingState : e.currentTarget.value,
            bgColor : e.currentTarget.value === 'Reading' ? 'libre-bg-yellow' : e.currentTarget.value === 'Loaned' ? 'libre-bg-grey' : 'bg-indigo'
        })
        this.props.changeBookState(e.currentTarget.value , this.props.book.id);
    }
    handleDeleteBook = () => {
        this.props.deleteBook('library' , this.props.book.id);
    }
  render() {
      const {book} = this.props ; 
    return (
<div className="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4 js-book">
        <div className='book-thumbnail'>
            <div className='bg-indigo remove-item-big hover:cursor-pointer' onClick={ this.handleDeleteBook }><strong>&times;</strong></div>
            <img src={ book.thumbnail ? book.thumbnail : './images/coverNotFound.jpg' } className="shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo"/>
        </div>
      <div className="ml-3 sm:ml-0 w-2/3 sm:w-full">
          <p className="text-sm my-2 font-medium sm:font-normal">{ book.title } Aug 2018</p>
          <p className="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
          <label className={`hidden sm:inline-block rounded-full ${this.state.bgColor} text-white px-2 py-1/2 text-xs`} onClick={ this.handleClick }>{book.readingState}</label>
          <div className={`block sm:${ this.state.stateList ? 'block' : 'hidden' } relative`}>
              <select onChange={ this.handleChange } className="block appearance-none w-full text-sm bg-white border border-grey-light hover:border-grey pl-3 py-1 pr-8 rounded shadow leading-normal focus:outline-none focus:shadow-outline">
                  <option>Reading</option>
                  <option>Loaned</option>
                  <option >Finished</option>
              </select>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
              </div>
          </div>
      </div>
  </div>
    )
  }
}

const mapDispatchToState = (dispatch) => {
    return {
        deleteBook : (list , id) => dispatch(deleteBook(list , id)),
        changeBookState : (readingState , id) => dispatch(changeBookState(readingState , id))
    }
}

export default  connect(null,mapDispatchToState)(LibraryBook);