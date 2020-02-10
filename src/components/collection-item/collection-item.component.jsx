import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import addItem from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

//interesting- you use wiggly brackets when there are multiple js elemetns to interpret. otherwise, brackets
const CollectionItem = ({ item, addItem }) => {
  const { id, name, imageUrl, price } = item;
  return (
  <div className='collection-item'>
    <div className='image'
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>  
    <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
  </div>
    )
  }

// addItem is a new function you are creating
// that will go into the component as a prop
// it will receive the item as the property
// pass it into our additem action creator
// type equals addItem
// payload the item passed in
// then pass it into the store
// and got into the redux flow

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);

// import React from 'react';

// import './collection-item.styles.scss';

// const CollectionItem = ({ id, name, price, imageUrl }) => (
//   <div className='collection-item'>
//     <div
//       className='image'
//       style={{
//         backgroundImage: `url(${imageUrl})`
//       }}
//     />
//     <div className='collection-footer'>
//       <span className='name'>{name}</span>
//       <span className='price'>{price}</span>
//     </div>
//   </div>
// );

// export default CollectionItem;