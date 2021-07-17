import { Grid, Text } from "@chakra-ui/react"
import InfosAfrica from "../InfosAfrica/infosAfrica"

export default function Content(){
    return(
        <Grid templateColumns={["1fr", "1fr", "1fr fr", "1.2fr 1fr"]} gap={[5, 10 , 16, 20]} my={["8","20"]}>
            <Text
            fontSize={["lg","xl","xl","2xl"]}
            color="gray.700"
            textAlign="justify"
            >Os países da África são as nações cujos territórios encontram-se no continente africano e distribuem-se em grandes regiões: África Central; África Meridional; África Setentrional; África Ocidental; e África Oriental. Juntos, esses países compreendem uma área de aproximadamente 30 milhões de km2. Nesses territórios, vivem mais de um bilhão de pessoas que se diferenciam étnica e culturalmente. A história dos países da África está intrinsecamente ligada à história da humanidade.</Text>
            <InfosAfrica />
        </Grid>
    )
}