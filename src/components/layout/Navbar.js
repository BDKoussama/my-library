import React , {Component} from 'react'
import {connect} from 'react-redux' ;
import {toggleMenu} from '../../store/actions/navActions';

class Navbar extends Component {
    handleClick = () => {
        this.props.toggleMenu();
    }
  render(){
      const { toggle } = this.props
    return (
        <div className="bg-indigo-darker text-center p-4 px-6 flex items-center">
            <div className="hidden lg:block lg:w-1/4 xl:w-1/5 pr-8">
                <a href="#" className="flex justify-start pl-6">
                    <img src="./images/logo.svg" className="" alt="logo"/>
                </a>
            </div>
            <div className="lg:hidden pr-3" id="mobile-nav-trigger">
                <div className= { toggle ? "toggle p-2 block open " :  "toggle p-2 block " } onClick={ this.handleClick } ><span></span></div>
            </div>
            <div className="flex flex-grow items-center lg:w-3/4 xl:w-4/5">
                <span className="relative w-full">
                <input type="search" placeholder="Search" className="w-full text-sm text-white transition border border-transparent focus:outline-none focus:border-indigo placeholder-white rounded bg-indigo-medium py-1 px-2 pl-10 appearance-none leading-normal ds-input" />
                <div className="absolute search-icon" style= { { top: '.5rem', left: '.8rem'} }>
                    <svg className="fill-current pointer-events-none text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                </div>
            </span>
                <a href="#" className="text-sm text-right text-white py-2 px-3 hover:text-grey-dark no-underline hidden lg:block lg:w-1/3 px-6">Back to Github</a>
            </div>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
    return {
        toggle : state.nav.toggle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu : () => dispatch(toggleMenu())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Navbar)
