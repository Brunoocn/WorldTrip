import { Flex, Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Caracteristicas from "../components/Caracteristica";
import Separador from "../components/Separador/Separador";
import Slider from "../components/Slider/index";

export default function Home() {
  return (
   <Flex direction="column">
     <Header />
     <Banner />
     <Caracteristicas />
     <Separador />
     
     <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
     >
       Vamos nessa? <br /> Então escolha seu continente
     </Heading>

      <Slider/>

   </Flex>
  )
}
