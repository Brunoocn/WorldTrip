import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Slider(){
    return(
       <Flex w="100%" maxWidth="1240px" mx="auto" mb={["5", "10"]} h={["250px", "450px"]} >
           <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true}}
            autoplay={{
                delay:4000,
            }}
            style={{width: '100%', flex:'1'}}
           >

            <SwiperSlide>
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="url(/continentimage.png)"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                    bgPosition="center"
                >
                    <Link href="/continent/europe">
                        <a>
                            <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">
                                Europa
                            </Heading>
                            <Text fontWeight={["bold"]} color="gray.300" fontSize={["0.8rem", "1xl","2xl"]} mt={["2", "4"]}>
                                O continente mais antigo.
                            </Text>
                        </a>
                    </Link>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="url(/asia.jpg)"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                    bgPosition="center"
                >
                    <Link href="/continent/asia">
                        <a>
                            <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">
                                Asia
                            </Heading>
                            <Text fontWeight={["bold"]} color="gray.300" fontSize={["0.8rem", "1xl","2xl"]} mt={["2", "4"]}>
                                Uma cultura unica.
                            </Text>
                        </a>
                    </Link>
                </Flex>
            </SwiperSlide>

            <SwiperSlide>
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="url(/America.banner.jpg)"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                    bgPosition="center"
                >
                    <Link href="/continent/america">
                        <a>
                            <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">
                                America
                            </Heading>
                            <Text fontWeight={["bold"]} color="gray.300" fontSize={["0.8rem", "1xl","2xl"]} mt={["2", "4"]}>
                                O continente mais bonito.
                            </Text>
                        </a>
                    </Link>
                </Flex>
            </SwiperSlide>

            <SwiperSlide>
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="url(/africa.banner.jpg)"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                    bgPosition="center"
                >
                    <Link href="/continent/africa">
                        <a>
                            <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">
                                Africa
                            </Heading>
                            <Text fontWeight={["bold"]} color="gray.300" fontSize={["0.8rem", "1xl","2xl"]} mt={["2", "4"]}>
                                O maior continente.
                            </Text>
                        </a>
                    </Link>
                </Flex>
            </SwiperSlide>
            <SwiperSlide>
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    bgImage="url(/banner.oceania.jpg)"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                    bgPosition="center"
                >
                    <Link href="/continent/oceania">
                        <a>
                            <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">
                                Oceania
                            </Heading>
                            <Text fontWeight={["bold"]} color="gray.300" fontSize={["0.8rem", "1xl","2xl"]} mt={["2", "4"]}>
                                O continente das ilhas.
                            </Text>
                        </a>
                    </Link>
                </Flex>
            </SwiperSlide>


           </Swiper>
       </Flex>
    )
}