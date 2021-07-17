import { Grid, Heading } from '@chakra-ui/layout';
import Londres from './Londres'
import Paris from './Paris'
import Roma from './Roma'
import Praga from './Praga'
import Amsterda from './Amsterda'
 
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

                <Londres />
                <Paris />
                <Roma />
                <Praga />
                <Amsterda />
                


            </Grid>
        </>
    )
}