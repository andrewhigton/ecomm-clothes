import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';
//so to return js, use curlys, push the () down, prefaced by return 
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => ( 
        <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
      <span className='empty-message'>Your cart is empty</span> 
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
  );
// {cartItems.length ? (
//         cartItems.map(cartItem => (
//           <CartItem key={cartItem.id} item={cartItem} />
//         ))
//       ) : (
//         <span className='empty-message'>Your cart is empty</span>
//       )}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
// export default withRouter(connect(mapStateToProps)(CartDropdown));
// export default CartDropdown;
// import React from 'react';
// import { withRouter } from 'react-router-dom';

// import CustomButton from '../custom-button/custom-button.component';
// import CartItem from '../cart-item/cart-item.component';

// import './cart-dropdown.styles.scss';

// const CartDropdown = ({ cartItems, history, dispatch }) => (
//   <div className='cart-dropdown'>
//     <div className='cart-items'>
//       {cartItems.length ? (
//         cartItems.map(cartItem => (
//           <CartItem key={cartItem.id} item={cartItem} />
//         ))
//       ) : (
//         <span className='empty-message'>Your cart is empty</span>
//       )}
//     </div>
//     <CustomButton
//     >
//       GO TO CHECKOUT
//     </CustomButton>
//   </div>
// );

// export default CartDropdown;
