import React,{Component} from 'react'
import { connect } from 'react-redux';
import ReadingBook from './ReadingBook';
import FinishedBook from './FinishedBook';

class  Profile extends Component {

  render(){
    const { toggleProfile , library } = this.props ;
    const finished = library.filter(item => item.readingState === 'Finished');
    const reading = library.filter(item => item.readingState === 'Reading');
    const style = { top : '63px' }
    return (
    	<div className= { `${ toggleProfile  ? '' : 'hidden' } absolute pin-b z-10 lg:relative lg:block w-full lg:w-1/5 bg-grey-lighter-2 px-6 pt-10` } id="profile" style={ toggleProfile ? style : null }>
          <FinishedBook books={finished} total={library.length}/>
          <ReadingBook books={reading}/>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        toggleProfile: state.nav.toggleProfile,
        library : state.library.library
    }
}
export default connect(mapStateToProps,null)(Profile)
