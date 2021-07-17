import { Grid, Heading } from '@chakra-ui/layout';
import LosAngeles from './LosAngeles';
import Toronto from './Toronto';
import Ny from './Ny'
import SaoPaulo from './Sp'
import Vancouver from './Vancouver'
 
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
                <LosAngeles />
                <Toronto />
                <Ny />
                <SaoPaulo />
                <Vancouver />
            </Grid>
        </>
    )
}