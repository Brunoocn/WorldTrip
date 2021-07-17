import { Flex } from "@chakra-ui/react";
import Header  from "../../components/Header";
import ContinentBanner from "../../components/ContinentBanner/america";
import ContentAmerica from "../../components/Content/infosAmerica/textAmerica";
import Cities from "../../components/Cities/Cities.america/";


export default function Continent(){
    return(
    <Flex direction="column">
        <Header />
        <ContinentBanner />
        <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
            <ContentAmerica />
            <Cities />
            
           
        </Flex>
    </Flex>
    )
}