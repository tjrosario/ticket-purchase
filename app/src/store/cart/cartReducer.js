import { PROCESSING_FEE, SERVICE_FEE } from "../../data/constants";
import { ADD_CART_ITEM, CLEAR_CART, PLACE_ORDER } from "./cartActionTypes";

export const initialState = {
    items: [],
    placeOrder: false,
    total: 0
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            let items = [...state.items];

            let exists = items.findIndex((item) => item.event.id === action.item.event.id);

            if (exists > -1) {
                items[exists] = {
                    ...items[exists],
                    qty: items[exists].qty + action.item.qty
                }
            } else {
                items = [
                    ...items,
                    { ...action.item, id: Math.random() }
                ];
            }

            let total = 0;

            items.forEach((item) => {
                total += (item.event.price.amount * item.qty);
                total += (SERVICE_FEE * item.qty);
                total += PROCESSING_FEE;
            });

            return {
                ...state,
                items,
                total: parseFloat(total).toFixed(2)
            };

        case CLEAR_CART:
            return initialState;

        case PLACE_ORDER:
            return {
                ...state,
                placeOrder: true
            };

        default:
            return state;
    }
};
