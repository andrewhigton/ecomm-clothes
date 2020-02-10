import { createSelector } from 'reselect';
//state.shop comes from rootredcuer
const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);