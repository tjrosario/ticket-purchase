import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function Confirmation({ isOpen, onClose, ...props }) {
    return (
        <Modal isOpen={isOpen} {...props}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{props.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{props.body}</ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

Confirmation.propTypes = {
    body: PropTypes.object,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
};

Confirmation.defaultProps = {
    body: null,
    isOpen: false,
    onClose: () => {},
    title: '',
};
