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
import styled, { css } from 'styled-components';
import './header.styles.scss';


const OptionsContainerStyles = css`
		padding: 10px 15px;
    cursor: pointer;
`

const HeaderContainer = styled.div`
		height: 70px;
	  width: 100%;
	  display: flex;
	  justify-content: space-between;
	  margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
		height: 100%;
    width: 70px;
    padding: 25px;
`;

const OptionsContainer = styled.div`
		width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const OptionLink = styled(Link)`
		${OptionsContainerStyles}
`

const OptionDiv = styled.div`
		${OptionsContainerStyles}	
`
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