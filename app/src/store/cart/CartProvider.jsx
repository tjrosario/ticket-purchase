import { createContext, useReducer } from 'react';
import { ADD_CART_ITEM, CLEAR_CART, PLACE_ORDER } from './cartActionTypes';
import { cartReducer, initialState } from './cartReducer';

export const Cart = createContext();
Cart.displayName = 'Cart';

export const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);

    const cartActions = {
        addCartItem: (item) => {
            dispatch({
                type: ADD_CART_ITEM,
                item,
            });
        },
        clearCart: () => {
            dispatch({
                type: CLEAR_CART,
            });
        },
        placeOrder: () => {
            dispatch({
                type: PLACE_ORDER,
            });
        },
    };

    const value = {
        cartActions,
        cartState,
    };

    return <Cart.Provider value={value}>{children}</Cart.Provider>;
};
