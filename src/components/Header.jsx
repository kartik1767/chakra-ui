import React from 'react'
import { Link } from 'react-router-dom'
import { 
    Drawer, 
    DrawerBody, 
    DrawerHeader, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    Button, 
    useDisclosure,
    VStack, HStack} 
from '@chakra-ui/react'
import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {
    // isOpen will tell us if the drawer is open or not on the basis of true/false
    // onOpen will open the drawer and onClose will close it.
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <Button 
                zIndex={'overlay'}
                pos={'fixed'} 
                top={'4'} 
                left={'4'} 
                colorScheme='purple'
                p={'0'}
                w={'10'}
                h={'10'}
                borderRadius={'full'}
                onClick={onOpen}
                >
                <BiMenuAltLeft size={'20'}/>
            </Button>

            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay/>

                {/* Content of Drawer */}
                <DrawerContent>
                    
                    {/* It will close the drawer "X Button" */}
                    <DrawerCloseButton/>

                    {/* Header of Drawer */}
                    <DrawerHeader> VIDEO HUB</DrawerHeader>

                    {/* Body of drawer */}
                    <DrawerBody>
                        {/* A div with pre defined vertical alignment */}
                        <VStack alignItems={'flex-start'}>

                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={'/'}>Home</Link>
                            </Button>

                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={'/        '}>Videos</Link>
                            </Button>

                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={'/videos?category=free'}>Free videos</Link>
                            </Button>

                            <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                                <Link to={'/upload'}>Upload Video</Link>
                            </Button>
                        </VStack>
                        
                        {/* A div with predefined horizontal alignment */}
                        <HStack
                            pos={'absolute'}
                            bottom={'10'}
                            left={'0'}
                            w={'full'}
                            justifyContent={'space-evenly'}
                        >
                            <Button onClick={onClose} colorScheme={'purple'}>
                                <Link to={'/login'}>Log In</Link>
                            </Button>
                            
                            <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                                <Link to={'/signup'}>Sign Up</Link>
                            </Button>
                        </HStack>

                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header
