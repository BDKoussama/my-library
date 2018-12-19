import React , {Component} from 'react'
import {connect} from 'react-redux' ;
import {toggleMenu } from '../../store/actions/navActions';
import Search from '../layout/Search';

class Navbar extends Component {
    
    handleClick = () => {
        this.props.toggleMenu();
    }

    render(){
        const { toggle , books , fetchError} = this.props;
        
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
                {/* Search Component */}
                <Search books={books} err={fetchError}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toggle : state.nav.toggle,
        books : state.search.books,
        fetchError : state.search.fetchError

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu : () => dispatch(toggleMenu()),
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Navbar)
