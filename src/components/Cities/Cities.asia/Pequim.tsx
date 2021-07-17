import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";

export default function Pequim(){
    return(
        <Box borderRadius="4px" overflow="hidden">
            <Image src="/cities.asia/pequim.jpg" h="170px" w="100%"/>
            <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500">Pequim</Heading>
                    <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">China</Text>
                </Flex>
                <Image src="/cities.asia/china.jpg" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
            </Flex>
        </Box>
    )
}