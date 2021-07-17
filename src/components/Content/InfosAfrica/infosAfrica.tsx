import { Flex, Heading, Text, Popover, PopoverTrigger, Icon, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function infosAfrica(){
    return(
        <Flex
            align="center"
            justify="space-between"
        >
        
        <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
            <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">54</Heading>
            <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">Países</Text>
        </Flex>

        <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
            <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">1000</Heading>
            <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">Linguas</Text>
        </Flex>

        <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
            <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">79</Heading>
            <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                Cidades +100
            <Popover>
                <PopoverTrigger>
                    <span>
                        <Icon
                        cursor="pointer"
                        as={RiInformationLine}
                        ml="1"
                        color="gray.400"
                        w={["10px", "16px"]}
                        h={["10px", "16px"]}
                        />
                    </span>
                </PopoverTrigger>
                <PopoverContent bg="gray.700" color="yellow.400">
                    <PopoverArrow bg="gray.700"/>
                    <PopoverCloseButton />
                    <PopoverBody 
                    fontWeight="400"
                    fontSize="lg"
                    >
                        África do Sul, Angola, Argélia, Benim, Camarões, Costa do Marfim
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            
            </Text>
        </Flex>

        </Flex>
    )
}