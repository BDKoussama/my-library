import React, { Component } from 'react'
import Searchitem from './Searchitem';
import {fetchBooks} from '../../store/actions/searchActions';
import {connect} from 'react-redux';

class Search extends Component {

    constructor(props){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.state = { open : false }
    }

    handleInputChange = (e) => {
        this.props.fetchBooks(e.target.value);
    }
    
    handleClick() {
        if (!this.state.open) {
          // attach/remove event handler
          document.addEventListener('click', this.handleOutsideClick, false);
        } else {
          document.removeEventListener('click', this.handleOutsideClick, false);
        }
    
        this.setState(prevState => ({
           open: !prevState.open,
        }));
      }
      
      handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
          return;
        }
        this.handleClick();
    }

  render() {
    const { books }= this.props ;
    return (
        <div className="flex flex-grow items-center lg:w-3/4 xl:w-4/5" ref={node => { this.node = node }} >
            <span className="relative w-full">
                <input type="text" placeholder="Search" id="search" onClick={this.handleClick} onChange={ this.handleInputChange }  className="w-full text-sm text-white transition border border-transparent focus:outline-none focus:border-indigo placeholder-white rounded bg-indigo-medium py-1 px-2 pl-10 appearance-none leading-normal ds-input" />
                { this.state.open && (
                    <ul className='search-result' >
                        { books && books.map(item => {
                            return <Searchitem book={ item } key={item.id}/>
                        }) }
                    </ul> 
                )}
                <div className="absolute search-icon" style= { { top: '.5rem', left: '.8rem'} }>
                    <svg className="fill-current pointer-events-none text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                </div>
            </span>
                <a href="#" className="text-sm text-right text-white py-2 px-3 hover:text-grey-dark no-underline hidden lg:block lg:w-1/3 px-6">Back to Github</a>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks : (title) => dispatch(fetchBooks(title))
    }
}

export default  connect(null,mapDispatchToProps)(Search);