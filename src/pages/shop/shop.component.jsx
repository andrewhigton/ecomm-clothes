import React from 'react';
// import { connect } from 'react-redux';
//import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
//import SHOP_DATA from './shop.data.js';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
// import { selectCollections } from '../../redux/shop/shop.selectors';

//import CollectionPage from '../collection/collection.component';

const ShopPage = ({ collections }) => (
        <div className='shop-page'>
            <CollectionsOverview />
        </div>
  )

// const ShopPage = ({ collections }) => (
//         <div className='shop-page'>
//             {collections.map(({ id, ...otherCollectionProps }) => (
//             <CollectionPreview key={id} {...otherCollectionProps} />
//           ))}
//         </div>
//   )

// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// })

// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;