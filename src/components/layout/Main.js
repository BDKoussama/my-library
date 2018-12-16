import React from 'react'
import Title from '../content/Title';
import Desktopstats from '../content/Desktopstats';
import Library from '../content/Library';
import Picks from '../content/Picks';
import Tabs from '../Tabs/Tabs';
import {connect} from 'react-redux'
import BookDetail from '../content/BookDetail';

const Main = (props) => {
  const {toggle , book} = props ;
  console.log(book)
  return (
    <div className={`${ toggle ? 'hidden' : 'flex' } flex-1 flex-col md:px-6 pt-10`} id="content">
            {/* --- Title ---*/}
				<Title/>
            {/* Desktop Stats*/}
				{ book && <BookDetail selectedBook = { book }/>}
            { /* Tabs */ }
        <Tabs>
          <div label="Library">
            <Library/>
          </div>
          <div label="Picks for you">
            <Picks/>
          </div>
          <div label='stats'>
            <Desktopstats/>
          </div>
        </Tabs>
		</div>
  )
}
const mapStatToProps = (state) => {
    return {
        toggle : state.nav.toggleProfile,
        book : state.book.selectedBook
    }
}
export default connect(mapStatToProps,null)(Main)
