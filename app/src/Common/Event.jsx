import {
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Tr,
    Td,
    Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';

export default function Event({ event, onAddToCart, onSelect }) {
    const [qty, setQty] = useState(0);
    const addToCart = () => {
        onAddToCart({
            event,
            qty,
        });
    };

    const {
        cartState: { items },
    } = useCart();

    useEffect(() => {
        setQty(0);
    }, [items]);

    return (
        <Tr onClick={() => onSelect(event)}>
            <Td>
                <Text color="purple">{event.datesFormatted.dateTitle}</Text>

                <Text color="gray">{event.datesFormatted.dateSubTitle}</Text>
            </Td>
            <Td>{event.name}</Td>
            <Td>${event.price.amount}</Td>
            <Td>
                <NumberInput
                    defaultValue={0}
                    min={0}
                    onChange={(valueString) =>
                        setQty(parseInt(valueString, 10))
                    }
                    value={qty}
                    width="85px"
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Td>
            <Td>
                <Button
                    colorScheme="blue"
                    isDisabled={qty == 0}
                    onClick={addToCart}
                >
                    Add to Cart
                </Button>
            </Td>
        </Tr>
    );
}

Event.propTypes = {
    event: PropTypes.object,
    onAddToCart: PropTypes.func,
    onSelect: PropTypes.func,
};

Event.defaultProps = {
    event: {},
    onAddToCart: () => {},
    onSelect: () => {},
};
