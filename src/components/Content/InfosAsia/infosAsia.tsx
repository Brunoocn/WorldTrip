import { Flex, Heading, Text, Popover, PopoverTrigger, Icon, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function infosAsia(){
    return(
        <Flex
            align="center"
            justify="space-between"
        >
        
        <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
            <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">50</Heading>
            <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">Países</Text>
        </Flex>

        <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
            <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">90</Heading>
            <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">Linguas</Text>
        </Flex>

        <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
            <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">31</Heading>
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
                        Xangai, Tóquio, Istambul, Pequim, Hong Kong.
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            
            </Text>
        </Flex>

        </Flex>
    )
}