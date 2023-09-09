import {
    Box,
    Divider,
    Flex,
    Heading,
    Icon,
    Link,
    Text,
    VStack,
} from '@chakra-ui/react';
import { usePayments } from '../hooks/usePayments';
import PaymentMethod from './PaymentMethod';
import Confirmation from './Confirmation';
import { FaCcPaypal } from 'react-icons/fa';
import { CiCreditCard1 } from 'react-icons/ci';
import { AiOutlinePlus } from 'react-icons/ai';

export default function PaymentMethods() {
    const {
        paymentsActions: {
            editPaymentMethod,
            removePaymentMethod,
            addPaymentMethod,
            resetPaymentMethod,
        },
        paymentsState: { adding, editing, paymentMethods },
    } = usePayments();

    return (
        <Box borderWidth="1px" borderRadius="lg" p={6}>
            <VStack align="stretch" gap={5}>
                <Heading as="h2" size="md">
                    Payment
                </Heading>

                <Heading as="h3" size="sm">
                    Use Credit/Debit Card
                </Heading>

                {paymentMethods.map((paymentMethod) => (
                    <PaymentMethod
                        key={paymentMethod.id}
                        onEdit={(method) => {
                            editPaymentMethod(method);
                        }}
                        onRemove={(method) => {
                            removePaymentMethod(method);
                        }}
                        paymentMethod={paymentMethod}
                    />
                ))}

                <Flex alignItems="center" onClick={addPaymentMethod}>
                    <Icon as={AiOutlinePlus} boxSize={8} mr={2} />
                    <Icon as={CiCreditCard1} boxSize={8} mr={2} />
                    <Link>Add New Card</Link>
                </Flex>

                <Divider />

                <Heading as="h3" size="sm">
                    Or Pay With
                </Heading>

                <Icon as={FaCcPaypal} boxSize={8} mr={2} />

                <Text>
                    Pay in full or split up your payments with buy now, pay
                    later options from PayPal or Klarna.
                </Text>
            </VStack>

            <Confirmation
                body={<Text>Feature available in next release!</Text>}
                isOpen={!!editing || adding}
                onClose={resetPaymentMethod}
                title="Oops!"
            />
        </Box>
    );
}
