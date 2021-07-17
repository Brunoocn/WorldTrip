import { Flex } from "@chakra-ui/react"
import Header  from "../../components/Header"
import ContinentBanner from "../../components/ContinentBanner/asia"
import ContentAsia from "../../components/Content/InfosAsia/textAsia"
import Cities from "../../components/Cities/Cities.asia";


export default function Continent(){
    return(
    <Flex direction="column">
        <Header />
        <ContinentBanner />
        <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
            <ContentAsia />
            <Cities />
           
        </Flex>
    </Flex>
    )
}