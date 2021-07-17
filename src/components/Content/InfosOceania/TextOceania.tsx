import { Grid, Text } from "@chakra-ui/react";
import InfosAsia from "../InfosOceania/InfosOceania";

export default function Content(){
    return(
        <Grid templateColumns={["1fr", "1fr", "1fr fr", "1.2fr 1fr"]} gap={[5, 10 , 16, 20]} my={["8","20"]}>
            <Text
            fontSize={["lg","xl","xl","2xl"]}
            color="gray.700"
            textAlign="justify"
            >A Oceania é o continente mais isolado do mundo, sua barreira geográfica fez com que fosse o último a ser descoberto pelos europeus. Em razão desse atraso em seu descobrimento ficou conhecido como mundo novo. Assim como na América e na África, a Oceania era ocupada por nativos antes da chegada dos europeus, em pouco tempo grande parte desses povos foram praticamente dizimados e os que restaram reivindicam até os dias de hoje os seus direitos.
            </Text>
            <InfosAsia />
        </Grid>
    )
}