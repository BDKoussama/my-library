import React , { Component } from 'react'

class Searchitem extends Component{
    handleClick = () =>{
        console.log('Clicked');
    }
    render(){
        const { book } = this.props ; 
        return (
            <li className='search-item' onClick={ this.handleClick }>
                <div className='thumbnail-extra-small'>
                    <img src={ book.img ? book.img : './images/coverNotFound.jpg' } alt=""/>
                </div>
                <div className='search-item-info'>
                    <h5 className='search-book-title'>{  book.title } </h5>
                    <small className='search-book-author'> {book.author} </small>
                </div>
            </li>
        )
    }
}

export default Searchitem;
