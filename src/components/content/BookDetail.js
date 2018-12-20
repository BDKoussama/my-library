import React,{Component} from 'react'
import { connect } from 'react-redux';
import {addBookToLibrary ,closeAlert } from '../../store/actions/libraryActions';


class BookDetail extends Component { 

    constructor(){
        super();
        this.state = {
            alertMessage : ''
        }
    }

    addToLibrary = (e) => {
        this.props.addBookToLibrary(e.target.id , this.props.selectedBook.id);
        this.setState({
            alertMessage : e.target.id
        })
    }

    handleCloseAlert= () => {
        this.props.closeAlert();
    }

  render(){
    const { selectedBook , alert ,alreadyExistAlert } = this.props ;
    return (
        <div className='book-detail' data-id = { selectedBook.id }>
            <div className='book-thumbnail'>
                <img src={ selectedBook.thumbnail ? selectedBook.thumbnail : './images/coverNotFound.jpg' } alt=""/>
            </div>
            <div className='book-info'>
                <h4 className='book-title'>
                    {selectedBook.title} 
                </h4>
                <p className='book-author text-grey-dark mt-2'>Author : {selectedBook.author}</p>
                <p className='book-author text-grey-dark mt-2'>Pages : {selectedBook.pageCount}</p>
                <p className='book-author text-grey-dark mt-2'>Publisher : {selectedBook.publisher}</p>
                <p className='book-description text-sm text-indigo-darkest '> { selectedBook.description } </p>
                <button onClick={ this.addToLibrary } id='library' className="bg-indigo-dark hover:bg-indigo-darker text-white text-sm py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Library</button>
                <button onClick={ this.addToLibrary } id='whishlist' className="bg-indigo-dark hover:bg-indigo-darker text-white text-sm py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Wishlist</button>
                { 
                    alert &&
                    <div className='alert-msg success'>
                        <p><strong>{selectedBook.title}</strong> Added to { this.state.alertMessage } .</p>
                        <button type="button" className="close"  onClick={this.handleCloseAlert}> &times; </button>
                    </div> 
                }
 
                {   
                    alreadyExistAlert &&
                    <div className='alert-msg danger'>
                        <p><strong>{selectedBook.title}</strong> Already added to { this.state.alertMessage } .</p>
                        <button type="button" className="close"  onClick={this.handleCloseAlert}> <strong>&times;</strong> </button>
                    </div>
                }
            </div>
        </div>
      )
  }
}
const mapStateToProps = ( state ) => {
    return {
        alert : state.library.alert,
        alreadyExistAlert : state.library.alreadyExistAlert  
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addBookToLibrary: (list,id) => dispatch(addBookToLibrary(list,id)),
        closeAlert: () => dispatch(closeAlert())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BookDetail) ;
