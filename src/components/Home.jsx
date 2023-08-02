import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: "translate( -50%, -50%)",
    textTransform: 'uppercase',
    p: '4',
    size: '2xl'
}

const Home = () => {
    return (
        <Box>
            <MyCarousel/>

            <Container maxW={'container.xl'} minH={'100vh'} p="16">
                <Heading
                    textTransform={'uppercase'}
                    py="2"
                    w={'fit-content'}
                    borderBottom={'2px solid'}
                    m="auto"
                >
                    Services
                </Heading>

                <Stack
                    h="full"
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} h={["40","400"]} filter={'hue-rotate(-130deg)'} />

                    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus aliquam
                        veniam eligendi eaque impedit id doloremque. Provident fugiat quasi illum modi 
                        aspernatur accusamus eius numquam sapiente veniam. Vel quod, hic saepe ipsam 
                        eveniet ullam harum vitae dolorum magnam, voluptates exercitationem assumenda 
                        voluptas illo quisquam itaque dicta sed eius, nisi reiciendis vero. Veniam soluta
                        nisi nihil adipisci porro! Explicabo, deleniti! Eaque. Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Labore placeat minus magnam ipsum provident eos cum 
                        soluta. Incidunt dignissimos, hic aliquam saepe perferendis quod eveniet autem 
                        placeat consequatur quidem numquam. Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Tenetur magnam, odio explicabo similique eaque distinctio nisi ad impedit modi
                        dolores ipsam. Perspiciatis ex dolorum incidunt, iste optio vero eius, eos neque 
                        distinctio iure, doloremque voluptas. Alias vero sint minima aperiam ut, consectetur 
                        consequatur laudantium nihil dolores? Sequi aut fugiat debitis?
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

const MyCarousel = ()=>(
    <Carousel
            autoPlay
            infiniteLoop
            interval={1000}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
        >
            <Box w="full" h={'100vh'}>
                <Image src={img1}/>
                <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                    Watch The Future
                </Heading>
            </Box>

            <Box w="full" h={'100vh'}>
                <Image src={img2}/>
                <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                    Future is Gaming
                </Heading>
            </Box>

            <Box w="full" h={'100vh'}>
                <Image src={img3}/>
                <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                    Gaming on console
                </Heading>
            </Box>

            <Box w="full" h={'100vh'}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                <Image src={img4}/>
                <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                    Night Life is cool
                </Heading>
            </Box>
    </Carousel>
)

export default Home
