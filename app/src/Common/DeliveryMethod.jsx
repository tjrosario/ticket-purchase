import { Box, Heading, Text, VStack } from '@chakra-ui/react';

export default function DeliveryMethod() {
    return (
        <Box borderWidth="1px" borderRadius="lg" p={6}>
            <VStack align="stretch" gap={3}>
                <Heading as="h2" size="md">
                    Delivery
                </Heading>
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
