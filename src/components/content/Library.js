import React,{Component} from 'react';
import LibraryBook from './LibraryBook';
class Library extends Component {
    
  render(){
    const { library } = this.props ; 
    return (
        <div className="hidden px-2 pt-2 md:px-0 flex-wrap order-2 pb-8 js-tab-pane active" id="section-library">
           { library && library.map(book => {
                return (
                    <LibraryBook book = { book } key={book.id}/>
                )
           }) }      
        </div>
      )
  }
}

export default Library
