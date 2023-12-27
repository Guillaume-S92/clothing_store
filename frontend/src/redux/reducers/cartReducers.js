import * as actionTypes from '../constants/cartConstants'

const CART_INITIAL_state = {
  cartItems: [],
}

export const cartReducer = (state = CART_INITIAL_state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload

      const existItem = state.cartItems.find(x => x.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.product === existItem.product ? item : x,
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== action.payload),
      }
    case actionTypes.FETCH_MY_CART:
      return {
        cartItems: [...action.payload.carts],
      }
    case 'CONFIRM_ORDER':
      return {
        ...state,
        lastOrder: action.payload,
      };
      case actionTypes.CART_RESET:
        return {
          cartItems: [],
        };
  
      default:
        return state;
  }
}
