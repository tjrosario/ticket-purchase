import PAYMENT_METHODS from "../../data/paymentMethods";
import { SELECT_PAYMENT_METHOD, REMOVE_PAYMENT_METHOD, EDIT_PAYMENT_METHOD, RESET_PAYMENT_METHOD, ADD_PAYMENT_METHOD } from "./paymentsActionTypes";

export const initialState = {
    adding: false,
    paymentMethods: PAYMENT_METHODS,
    selected: null,
    editing: null
};

export const paymentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PAYMENT_METHOD:
            return {
                ...state,
                editing: null,
                selected: action.paymentMethod
            };

        case REMOVE_PAYMENT_METHOD:
            return {
                ...state,
                editing: null,
                paymentMethods: state.paymentMethods.filter((p) => p.id !== action.paymentMethod.id)
            };

        case ADD_PAYMENT_METHOD:
            return {
                ...state,
                adding: true
            };

        case EDIT_PAYMENT_METHOD:
            return {
                ...state,
                editing: action.paymentMethod
            };

        case RESET_PAYMENT_METHOD:
            return initialState;

        default:
            return state;
    }
};

