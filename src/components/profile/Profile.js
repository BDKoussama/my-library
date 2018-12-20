import React,{Component} from 'react'
import { connect } from 'react-redux';

class  Profile extends Component {


  render(){
    const { toggleProfile } = this.props ;
    const style = { top : '63px' }
    return (
    	<div className= { `${ toggleProfile  ? '' : 'hidden' } absolute pin-b z-10 lg:relative lg:block w-full lg:w-1/5 bg-grey-lighter-2 px-6 pt-10` } id="profile" style={ toggleProfile ? style : null }>
            <div className="my-4 border-t pt-4">
                <h3 className="text-indigo-dark font-normal">You have read <strong>4 of 30 books</strong> in 2018</h3>
                <div className="flex flex-wrap -ml-2 justify-start items-center">
                    <img src="./images/read-01.jpg" alt="read" className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition-normal hover:brighter"/>
                    <img src="./images/read-02.jpg" alt="read" className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition-normal hover:brighter"/>
                    <img src="./images/read-03.jpg" alt="read" className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition-normal hover:brighter"/>
                    <img src="./images/read-04.jpg" alt="read" className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block m-2 transition-normal hover:brighter"/>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-grey-dark mt-1 text-sm">Currently Reading</p>
                <div className="flex items-start mt-2">
                    <img src="./images/read-04.jpg" alt="read" className="w-1/6 lg:w-1/5 max-w-tiny shadow-md block transition-normal hover:brighter"/>
                    <div className="ml-3">
                        <p className="mt-1 leading-normal">Popular Lies* About Graphic Design</p>
                        <p className="text-indigo text-sm mt-1">15/250 pages</p>
                    </div>
                </div>
            </div>
        </div>
  )
  }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        toggleProfile: state.nav.toggleProfile
    }
}
export default connect(mapStateToProps,null)(Profile)
