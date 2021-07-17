import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";

export default function França(){
    return(
        <Box borderRadius="4px" overflow="hidden">
            <Image src="/cities.eu/Praga.png" h="170px" w="100%"/>
            <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500">Praga</Heading>
                    <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">República Tcheca</Text>
                </Flex>
                <Image src="/cities.eu/Republica.png" w="30px" h="30px" />
            </Flex>
        </Box>
    )
}