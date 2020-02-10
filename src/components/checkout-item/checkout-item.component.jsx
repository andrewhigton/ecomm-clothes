import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>   
        <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
          <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
  })

export default connect(null, mapDispatchToProps)(CheckoutItem);
// the clearItem pattern:
// onclick triggers clearItem
// clearItem is dispatched to Props through clearItemFromCart with the item
// sent to actions, actions finds it in types
// the reducer filters out the item 
// goes through to root reducer, with new cart object 