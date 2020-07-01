/* eslint-disable no-param-reassign */
import produce from 'immer';

// state is the state props values before the action
export default function cart(state = [], action) {
  // console.log(state);

  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, (draft) => {
        const { product } = action;

        draft.push(product);
        // draft.push(action.product);
      });
    case '@cart/REMOVE':
      // console.tron.log('remove');
      return produce(state, (draft) => {
        // Product index that I am working
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1); // I want remove one product
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      // if amout is zero I do nothing
      // This verification also is making on saga.js
      if (Number(action.amount) <= 0) {
        return state;
      }

      return produce(state, (draft) => {
        // Product index that I am working
        const productIndex = draft.findIndex((p) => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    // return [
    //   ...state,
    //   {
    //     ...action.product,
    //     amount: 1,
    //   },
    // ];
    default:
      return state;
  }
}
