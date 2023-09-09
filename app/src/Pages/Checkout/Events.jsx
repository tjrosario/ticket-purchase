import {
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
} from '@chakra-ui/react';
import Event from '../../Common/Event';
import { useEvents } from '../../hooks/useEvents';
import { useCart } from '../../hooks/useCart';

export default function Events() {
    const {
        eventsActions: { selectEvent },
        eventsState: { events },
    } = useEvents();

    const {
        cartActions: { addCartItem },
    } = useCart();

    return (
        <TableContainer>
            <Heading as="h2" size="md">
                Upcoming Events
            </Heading>
            <Table variant="simple" mt="3">
                <Thead>
                    <Tr>
                        <Th>Date</Th>
                        <Th>Event</Th>
                        <Th>Price</Th>
                        <Th>Quantity</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {events.map((event) => (
                        <Event
                            event={event}
                            key={event.id}
                            onAddToCart={(item) => {
                                addCartItem(item);
                            }}
                            onSelect={(event) => {
                                selectEvent(event);
                            }}
                        />
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}
