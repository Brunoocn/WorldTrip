import { Flex } from "@chakra-ui/react";
import Header  from "../../components/Header";
import ContinentBanner from "../../components/ContinentBanner/africa";
import ContentAfrica from "../../components/Content/InfosAfrica/textAfrica"
import Cities from "../../components/Cities/Cities.africa/index"


export default function Continent(){
    return(
    <Flex direction="column">
        <Header />
        <ContinentBanner />
        <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
            <ContentAfrica />
            <Cities />
        </Flex>
    </Flex>
    )
}