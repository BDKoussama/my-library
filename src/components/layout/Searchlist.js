import React, { Component } from 'react'
import Searchitem from './Searchitem';

class Searchlist extends Component {

    constructor(props){
        super(props);
        this.setListRef = this.setListRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    state = {
        toggleList : true 
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setListRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ toggleList : !this.state.toggleList })
        }
    }

  render() {
      const { books }= this.props ; 
    return (
      <ul className='search-result' ref={this.setListRef} style={ this.state.toggleList ? { display : 'block' } : { display: 'none' } }>
            { books && books.map(item => {
                return <Searchitem book={ item } key={item.id}/>
            }) }
      </ul>
    )
  }
}

export default Searchlist;