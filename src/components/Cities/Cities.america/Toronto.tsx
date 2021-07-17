import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";

export default function Toronto(){
    return(
        <Box borderRadius="4px" overflow="hidden">
            <Image src="/cities.america/Toronto.jpg" h="170px" w="100%"/>
            <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500">Toronto</Heading>
                    <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Canadá</Text>
                </Flex>
                <Image src="/cities.america/canada.jpeg" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
            </Flex>
        </Box>
    )
}