import React,{Component} from 'react';
import {connect} from 'react-redux';
import {profileToggle} from '../../store/actions/navActions';
import {resetStats} from '../../store/actions/navActions';
import {NavLink} from 'react-router-dom';
import {delteBook} from '../../store/actions/libraryActions';
import WishListItem from "../content/WishListItem";

class Sidenav extends Component{

	state = {
		toggleCat : false 
	}

	handleClick = () => {
		this.setState({
			toggleCat : !this.state.toggleCat
		})
	}

	homePage = () => {
		this.props.resetStats();
	}

	toggleProfile = () => {
		this.props.profileToggle();
	}

	render(){
	const { toggle , wishlist } = this.props ; 
	const { toggleCat } = this.state;
	let className = 'absolute lg:relative lg:flex lg:text-sm bg-indigo-darker lg:bg-transparent pin-l pin-r py-4 px-6 lg:pt-10 lg:pl-12 lg:pr-6 -mt-1 lg:mt-0 overflow-y-auto lg:w-1/5 lg:border-r z-40';
	className += toggle ? '' : ' hidden';
		return (
    		<nav className={className}>
				<ul className="list-reset mb-8 w-full">
					<li className="ml-2 mb-4 flex">
						<img src="./images/home-default.svg" alt="home-icon" className="w-4 h-4 mr-2"/>
						<div className="hover:cursor-pointer text-white lg:text-indigo-darkest no-underline font-medium mobile-home-trigger" onClick= { this.homePage }>
							Home
						</div>
					</li>
					<li className="ml-2 mb-4 flex lg:hidden">
						<img src="./images/profile-default.svg" alt="profile-icon" className="w-4 h-4 mr-2"/>
						<div className="hover:cursor-pointer text-white lg:text-indigo-darkest no-underline font-medium" id="mobile-profile-trigger" onClick = {this.toggleProfile}>
							 Profile
						</div>
					</li>
					<li className="ml-2 mb-4">
						<div className="flex" id="sidenav-categories-trigger" onClick={this.handleClick}>
							<img src="./images/wishlist-default.svg" alt="wishlist-icon" className="w-4 h-4 mr-2"/> 
							<div className="hover:cursor-pointer text-white lg:text-indigo-darkest no-underline font-medium w-full relative">
								Wishlist
								<span className="bg-indigo-dark text-white text-xs rounded-full px-2 leading-normal" style={ { marginLeft : '0.3em' } }>{wishlist ? wishlist.length : 0}</span>
								<div className="pointer-events-none absolute pin-y pin-r flex items-center px-1 text-grey-darker" id="sidenav-icon">
									<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						</div>

						<ul className={ `text-grey lg:text-grey-dark list-reset leading-loose mt-2 ${toggleCat ? '' : ' hidden'}` } id="sidenav-categories">
							{ wishlist && wishlist.map(book => {
								return (
									<WishListItem book={book} key={book.id} />
								)
							})}
						</ul>

					</li>
				</ul>
			</nav>
  )
	}
}

const mapStateToProps = (state) => {

	return {
		toggle : state.nav.toggle,
		wishlist : state.library.wishlist
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		profileToggle : () => dispatch(profileToggle()),
		resetStats : () => dispatch(resetStats())
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Sidenav)
