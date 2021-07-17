import { Flex } from "@chakra-ui/react"
import Header  from "../../components/Header"
import ContinentBanner from "../../components/ContinentBanner/oceania"
import Content from "../../components/Content/InfosOceania/TextOceania"
import Cities from "../../components/Cities/Cities.oceania"

export default function Continent(){
    return(
    <Flex direction="column">
        <Header />
        <ContinentBanner />
        <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
            <Content />
            <Cities />
        </Flex>
    </Flex>
    )
}