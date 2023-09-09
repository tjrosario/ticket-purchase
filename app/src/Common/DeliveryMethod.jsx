import { Box, Flex, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function DeliveryMethod() {
    return (
        <Box borderWidth="1px" borderRadius="lg" p={6}>
            <VStack align="stretch" gap={3}>
                <Flex alignItems="center">
                    <Heading as="h2" size="md">
                        Delivery
                    </Heading>
                    <Icon
                        as={AiOutlineCheckCircle}
                        boxSize={8}
                        color="green.500"
                        ml="2"
                    />
                </Flex>

                <Heading as="h2" size="sm">
                    Mobile Entry - Free
                </Heading>

                <Text>Tickets Available by Sunday Apr 3, 2023</Text>
                <Text>
                    Mobile: Your phone's your ticket. Locate your tickets in
                    your account - or in your app. When you go mobile, your
                    tickets will not be emailed to you or available for print.
                </Text>
            </VStack>
        </Box>
    );
}
