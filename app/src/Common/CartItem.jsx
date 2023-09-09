import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { PROCESSING_FEE, SERVICE_FEE } from '../data/constants';

export default function CartItem({ item }) {
    return (
        <Box
            borderColor="darkgray"
            borderWidth="1px"
            borderRadius="lg"
            bg="#f3f3f3"
            p={5}
        >
            <VStack align="stretch">
                <Box>
                    <Heading as="h3" size="sm">
                        Event
                    </Heading>

                    <Flex>
                        <Text mr="2">
                            {item.event.name} x {item.qty}
                        </Text>
                        <Text ml="auto">${item.event.price.amount}</Text>
                    </Flex>
                </Box>
                <Box>
                    <Heading as="h3" size="sm" mt="3">
                        Notes From Seller
                    </Heading>
                    <Text>{item.event.sellerNotes}</Text>
                </Box>
                <Box>
                    <Heading as="h3" size="sm" mt="3">
                        Fees
                    </Heading>
                    <Flex>
                        <Text>
                            Service Fee: {SERVICE_FEE} x {item.qty}
                        </Text>
                        <Text ml="auto">${SERVICE_FEE * item.qty}</Text>
                    </Flex>
                    <Flex>
                        <Text>Order Processing Fee:</Text>
                        <Text ml="auto">${PROCESSING_FEE}</Text>
                    </Flex>
                </Box>
                <Box>
                    <Heading as="h3" size="sm" mt="3">
                        Delivery
                    </Heading>
                    <Flex>
                        <Text>Mobile Entry</Text>
                        <Text ml="auto">Free</Text>
                    </Flex>
                </Box>
            </VStack>
        </Box>
    );
}
