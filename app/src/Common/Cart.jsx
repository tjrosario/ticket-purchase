import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    Link,
    Text,
    Stack,
    VStack,
} from '@chakra-ui/react';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';
import { useState } from 'react';

export default function Cart() {
    const {
        cartActions: { placeOrder },
        cartState: { items, total },
    } = useCart();

    const [agreeToTerms, setAgreeToTerms] = useState(false);

    return (
        <Box borderWidth="1px" borderRadius="lg" p={6}>
            <VStack align="stretch" gap={5}>
                <Flex alignItems="center">
                    <Heading as="h2" size="md">
                        Total
                    </Heading>
                    <Text as="b" ml="auto" fontSize="lg">
                        ${total}
                    </Text>
                </Flex>

                {items.length > 0 ? (
                    <>
                        <Heading as="h3" size="sm">
                            Tickets
                        </Heading>

                        <VStack align="stretch" gap={5}>
                            {items.map((item) => (
                                <CartItem item={item} key={item.id} />
                            ))}
                        </VStack>

                        <Text as="b">* All Sales Final - No Refunds</Text>

                        <Stack spacing={5} direction="row">
                            <Checkbox
                                colorScheme="green"
                                onChange={(e) =>
                                    setAgreeToTerms(e.target.checked)
                                }
                                value={agreeToTerms}
                            >
                                I have read and agree to the current{' '}
                                <Link
                                    color="#2972da"
                                    href="https://ticketmaster-us.zendesk.com/hc/en-us/articles/10468830739345-Terms-of-Use"
                                >
                                    Terms of Use
                                </Link>
                                .
                            </Checkbox>
                        </Stack>

                        <Button
                            colorScheme="green"
                            isDisabled={
                                items.length === 0 || agreeToTerms === false
                            }
                            size="lg"
                            onClick={placeOrder}
                        >
                            Place Order
                        </Button>

                        <Text as="b" fontSize="xs">
                            Exceptions may apply, see our{' '}
                            <Link href="https://ticketmaster-us.zendesk.com/hc/en-us/articles/10468830739345-Terms-of-Use">
                                Terms of Use
                            </Link>
                            .
                        </Text>
                    </>
                ) : (
                    <Text>Cart is empty.</Text>
                )}
            </VStack>
        </Box>
    );
}
