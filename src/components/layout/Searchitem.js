import React , { Component } from 'react'
import {connect} from 'react-redux';
import {selectBook} from '../../store/actions/bookActions';

class Searchitem extends Component {

    handleClick = (e) =>{
        this.props.selectBook(e.currentTarget.dataset.id)
    }

    render(){
        const { book } = this.props ; 
        return (
            <li className='search-item' onClick={ this.handleClick.bind(this) } data-id={ book.id }>
                <div className='thumbnail-extra-small'>
                    <img src={ book.img ? book.img : './images/coverNotFound.jpg' } alt=""/>
                </div>
                <div className='search-item-info'>
                    <h5 className='search-book-title'>{ book.title } </h5>
                    <small className='search-book-author'> {book.author} </small>
                </div>
            </li>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        selectBook : (id) => dispatch(selectBook(id))
    }
}
export default connect(null,mapDispatchToProps)(Searchitem);
