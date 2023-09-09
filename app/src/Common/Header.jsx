import { Center, Flex, Heading, Icon } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCart } from '../hooks/useCart';

export default function Header() {
    const {
        cartState: { items },
    } = useCart();

    return (
        <Flex mb={10}>
            <Center>
                <Heading as="h1" color="#f9a92c">
                    TicketByte
                </Heading>
            </Center>
            <Center ml="auto">
                <Icon as={AiOutlineShoppingCart} boxSize={5} mr={1} />
                {items.length}
            </Center>
        </Flex>
    );
}
