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
    Radio,
    Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import {
    FaCcVisa,
    FaCcMastercard,
    FaCcAmex,
    FaCcDiscover,
} from 'react-icons/fa';
import { ImCreditCard } from 'react-icons/im';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useState } from 'react';

const CARDS = {
    amex: FaCcAmex,
    discover: FaCcDiscover,
    mastercard: FaCcMastercard,
    visa: FaCcVisa,
};

export default function PaymentMethod({
    onEdit,
    onRemove,
    paymentMethod,
    selected,
    onSelect,
}) {
    const [cvc, setCvc] = useState('');

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            bg={selected ? 'gray.100' : null}
            p={6}
            onClick={() => onSelect(paymentMethod)}
            _hover={{
                cursor: 'pointer',
            }}
        >
            <Flex alignItems="flex-start">
                <Radio
                    mr="4"
                    size="lg"
                    colorScheme="blue"
                    isChecked={selected}
                    value={paymentMethod.id}
                />
                <Icon as={CARDS[paymentMethod.cardType]} boxSize={8} mr={3} />
                <Box>
                    <Heading as="h4" size="sm" textTransform="capitalize">
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

            <Text mt="4" fontSize="14px">
                Security Code:
            </Text>
            <Flex alignItems="center" mt="1">
                <InputGroup width="auto" mr="3">
                    <Input
                        bg="white"
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
    onSelect: PropTypes.func,
    paymentMethod: PropTypes.object,
    selected: PropTypes.bool,
};

PaymentMethod.defaultProps = {
    onEdit: () => {},
    onRemove: () => {},
    onSelect: () => {},
    paymentMethod: {},
    selected: false,
};
