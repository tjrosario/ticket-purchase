import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import DeliveryMethod from '../../Common/DeliveryMethod';
import PaymentMethods from '../../Common/PaymentMethods';
import Cart from '../../Common/Cart';
import { useCart } from '../../hooks/useCart';
import Confirmation from '../../Common/Confirmation';

export default function Checkout({ ...props }) {
    const {
        cartActions: { clearCart },
        cartState: { items, placeOrder },
    } = useCart();

    const hasItems = items.length > 0;

    return (
        <Box>
            <Grid
                // templateColumns="repeat(2, 1fr)"
                templateColumns={{
                    md: 'repeat(2, 1fr)',
                }}
                templateRows="repeat(1, 1fr)"
                gap={4}
                {...props}
            >
                <GridItem>{hasItems && <DeliveryMethod />}</GridItem>

                <GridItem rowSpan={2} colSpan={1}>
                    <Cart />
                </GridItem>

                <GridItem>{hasItems && <PaymentMethods />}</GridItem>
            </Grid>

            <Confirmation
                body={
                    <>
                        <Text>Thank you for placing your order.</Text>
                        <Text>A confirmation email has been sent.</Text>
                    </>
                }
                isOpen={placeOrder}
                onClose={clearCart}
                title="Order Placed!"
            />
        </Box>
    );
}
