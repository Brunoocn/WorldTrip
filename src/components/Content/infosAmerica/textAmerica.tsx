import { Grid, Text } from "@chakra-ui/react"
import InfosAmerica from "../infosAmerica/infosAmerica"

export default function Content(){
    return(
        <Grid templateColumns={["1fr", "1fr", "1fr fr", "1.2fr 1fr"]} gap={[5, 10 , 16, 20]} my={["8","20"]}>
            <Text
            fontSize={["lg","xl","xl","2xl"]}
            color="gray.700"
            textAlign="justify"
            >A América do Norte está localizada no extremo norte das Américas e é composta por apenas três países: Estados Unidos, Canadá e México, além de territórios de domínios europeus, como a Groelândia (pertencente ao Reino da Dinamarca, com representação no parlamento) e Bermudas (dependência britânica).</Text>
            <InfosAmerica />
        </Grid>
    )
}