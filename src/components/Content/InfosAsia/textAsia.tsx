import { Grid, Text } from "@chakra-ui/react"
import InfosAsia from "../InfosAsia/infosAsia"

export default function Content(){
    return(
        <Grid templateColumns={["1fr", "1fr", "1fr fr", "1.2fr 1fr"]} gap={[5, 10 , 16, 20]} my={["8","20"]}>
            <Text
            fontSize={["lg","xl","xl","2xl"]}
            color="gray.700"
            textAlign="justify"
            >A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial. A Ásia é multicultural, abrigando diversas culturas, etnias, religiões e tradições.</Text>
            <InfosAsia />
        </Grid>
    )
}