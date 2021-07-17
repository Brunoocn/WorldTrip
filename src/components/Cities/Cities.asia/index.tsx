import { Grid, Heading } from '@chakra-ui/layout';
import Toquio from './Toquio';
import Hatsukaichi from './Hatsukaichi';
import Singapore from './Singapore';
import Shanghai from './Shanghai'
import Pequim from './Pequim'
 
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
                <Toquio />
                <Hatsukaichi />
                <Singapore />
                <Shanghai />
                <Pequim />
                

               
                


            </Grid>
        </>
    )
}