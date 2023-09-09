import {
    Box,
    Flex,
    HStack,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaCcVisa } from 'react-icons/fa';
import { ImCreditCard } from 'react-icons/im';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useState } from 'react';

export default function PaymentMethod({ onEdit, onRemove, paymentMethod }) {
    const [cvc, setCvc] = useState('');

    return (
        <Box borderWidth="1px" borderRadius="lg" p={6}>
            <Flex>
                <Icon as={FaCcVisa} boxSize={8} mr={3} />
                <Box>
                    <Heading as="h4" size="sm">
                        {paymentMethod.cardType} - {paymentMethod.last4}
                    </Heading>
                    <Text color="gray">
                        {paymentMethod.name} | {paymentMethod.expiry}
                    </Text>
                    <HStack>
                        <Link onClick={() => onEdit(paymentMethod)}>Edit</Link>
                        <Link onClick={() => onRemove(paymentMethod)}>
                            Delete
                        </Link>
                    </HStack>
                </Box>
            </Flex>

            <Text mt="4">Security Code:</Text>
            <Flex alignItems="center">
                <InputGroup width="auto" mr="3">
                    <Input
                        placeholder="Enter amount"
                        onChange={(e) => setCvc(e.target.value)}
                    />
                    {cvc.length > 3 && (
                        <InputRightElement>
                            <Icon
                                as={AiOutlineCheckCircle}
                                boxSize={8}
                                color="green.500"
                            />
                        </InputRightElement>
                    )}
                </InputGroup>

                <Icon as={ImCreditCard} boxSize={8} mr="3" />
                <Text fontSize="12px">3-digits on back of card</Text>
            </Flex>
        </Box>
    );
}

PaymentMethod.propTypes = {
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
    paymentMethod: PropTypes.object,
};

PaymentMethod.defaultProps = {
    onEdit: () => {},
    onRemove: () => {},
    paymentMethod: {},
};
