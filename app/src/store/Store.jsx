import { CartProvider } from './cart/CartProvider';
import { EventsProvider } from './events/EventsProvider';
import { PaymentsProvider } from './payments/PaymentsProvider';
import PropTypes from 'prop-types';

export const Store = ({ children }) => {
    return (
        <>
            <PaymentsProvider>
                <CartProvider>
                    <EventsProvider>{children}</EventsProvider>
                </CartProvider>
            </PaymentsProvider>
        </>
    );
};

Store.propTypes = {
    children: PropTypes.node.isRequired,
};
