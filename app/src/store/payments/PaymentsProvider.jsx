import { createContext, useReducer } from 'react';
import {
    SELECT_PAYMENT_METHOD,
    REMOVE_PAYMENT_METHOD,
    EDIT_PAYMENT_METHOD,
    RESET_PAYMENT_METHOD,
    ADD_PAYMENT_METHOD,
} from './paymentsActionTypes';
import { paymentsReducer, initialState } from './paymentsReducer';

export const Payments = createContext();
Payments.displayName = 'Payments';

export const PaymentsProvider = ({ children }) => {
    const [paymentsState, dispatch] = useReducer(paymentsReducer, initialState);

    const paymentsActions = {
        selectPaymentMethod: (paymentMethod) => {
            dispatch({
                type: SELECT_PAYMENT_METHOD,
                paymentMethod,
            });
        },
        editPaymentMethod: (paymentMethod) => {
            dispatch({
                type: EDIT_PAYMENT_METHOD,
                paymentMethod,
            });
        },
        removePaymentMethod: (paymentMethod) => {
            dispatch({
                type: REMOVE_PAYMENT_METHOD,
                paymentMethod,
            });
        },
        addPaymentMethod: () => {
            dispatch({
                type: ADD_PAYMENT_METHOD,
            });
        },
        resetPaymentMethod: () => {
            dispatch({
                type: RESET_PAYMENT_METHOD,
            });
        },
    };

    const value = {
        paymentsActions,
        paymentsState,
    };

    return <Payments.Provider value={value}>{children}</Payments.Provider>;
};
