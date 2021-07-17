import { Grid, Heading } from '@chakra-ui/layout';
import Cairo from "../Cities.africa/Cairo";
import Luxor from "../Cities.africa/Luxor";
import Alexandria from "../Cities.africa/Alexandria";
import Cabo from "../Cities.africa/Cabo"
import Durban from "../Cities.africa/Durban"
 
export default function Cities(){
    return(
        <>
            <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
                Cidades +100
            </Heading>
            <Grid 
                templateColumns={["1fr", 
                "1fr 1fr", 
                "repeat(3, 1fr)",
                "repeat(4, 1fr)"]} 
                gap={["20px", 
                "45px"]} 
                alignItems="center" 
                justifyContent="center" 
                px={["30", 
                "0"]}
            >
                <Cairo />
                <Luxor />
                <Alexandria />
                <Cabo />
                <Durban />

            </Grid>
        </>
    )
}