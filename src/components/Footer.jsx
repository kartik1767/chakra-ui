import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import { Box, Heading, Image, Container, Stack, Text, HStack, VStack, Button, Input } from '@chakra-ui/react'


const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'20'} p="10" color={'white'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size="md" textTransform={'uppercase'} textAlign={['center','left']}>
                        Subscribe to get Updates
                    </Heading>

                    <HStack>
                        <Input
                            placeholder='Enter Email Here...'
                            border={'none'}
                            borderRaddius="none"
                            outline={'none'}
                            focusBorderColor='none'
                        />
                        <Button
                            p={'0'}
                            colorScheme={'purple'}
                            variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend size={20}/>
                        </Button>
                    </HStack>
                </VStack>

                <VStack 
                    w={'full'}
                    borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}
                >
                    <Heading textTransform={'uppercase'} textAlign={'center'}>
                        VIDEO HUB
                    </Heading>
                    <Text>All rights reserved</Text>
                </VStack>

                <VStack 
                    w={'full'}
                >
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Social Media
                    </Heading>

                    <Button variant={'link'} colorScheme={'white'}>
                        <a href="#">Instagram</a>
                    </Button>

                    <Button variant={'link'} colorScheme={'white'}>
                        <a href="#">You Tube</a>
                    </Button>

                    <Button variant={'link'} colorScheme={'white'}>
                        <a href="#">Twitter</a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer
