import React from 'react';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

//so this works off a createselector
// const mapStateToProps = state => ({
// 	itemCount: selectCartItemsCount(state)
// })

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});


const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);



// import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { toggleCartHidden } from '../redux/cart/cart.actions';
// import { selectCartItemsCount } from '../redux/cart/cart.selectors';

// import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

// import './cart-icon.styles.scss';

// const CartIcon = ({ toggleCartHidden, itemCount }) => (
//   <div className='cart-icon' onClick={toggleCartHidden}>
//     <ShoppingIcon className='shopping-icon' />
//     <span className='item-count'>{itemCount}</span>
//   </div>
// );

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CartIcon);