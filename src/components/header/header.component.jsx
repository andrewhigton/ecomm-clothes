import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { connect } from 'react-redux';  
import { createStructuredSelector } from 'reselect';
// import { select } from '../../redux/cart/cart.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser} from '../../redux/user/user.selectors';
import { ReactComponent as Logo } from '../assets/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo'/>
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/shop'>
				CONTACT
			</Link>
			{
				currentUser ? (
			<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
			) : (
			<Link className='option' to='/signin'> SIGN IN</Link>
			)}
			<CartIcon />
		</div>
		{ hidden ? null : <CartDropdown /> }
		
	</div>
	);

//state here is the toplevel root reducer
//we pass in a currentUser value, from the root, and the user reducers
//then is passes this state value into the header component.
//so youre making state available to the current componet, via connect
//otherwise, you would have to pass this in through the link, as props. its just a shortcut 
//earlier version
// const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
// 	currentUser,
// 	hidden
// });

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);
				// {hidden ? null : <CartDropdown />} 