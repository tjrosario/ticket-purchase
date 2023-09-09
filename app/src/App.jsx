import { Container } from '@chakra-ui/react';
import Checkout from './Pages/Checkout/Checkout';
import Events from './Pages/Checkout/Events';
import { Store } from './store/Store';
import Header from './Common/Header';

function App() {
    return (
        <Store>
            <Container maxW="7xl" py={10}>
                <Header />
                <Events />
                <Checkout mt="5" />
            </Container>
        </Store>
    );
}

export default App;
