import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    Flex,
    Link,
    Container,
    Card,
    CardHeader,
    CardBody,
    Heading,
    CardFooter,
    VStack,
    useColorMode,
} from '@chakra-ui/react'
import Barcode from 'react-barcode';
import { useQuery } from '@tanstack/react-query';
import { HiOutlineExternalLink } from "react-icons/hi";
import { formatCustomDate } from '../../utils/TimeDateFormatter';
import '@fontsource/fira-mono';













function VehicleProfile({ plateNumber = "XXX_XXX_XXX" }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, setColorMode } = useColorMode()


    const { isPending, data } = useQuery({
        queryKey: [`vehicleRecordOf${plateNumber}`],
        queryFn: async () => {
            const response = await fetch(
                `https://mpmc-backend.onrender.com/get-vehicle-tolls/${plateNumber}`,
            )

            return await response.json()
        },
        refetchInterval: 30000,
        refetchOnMount: true,
        refetchOnWindowFocus: true
    })






    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
            <Flex><Link onClick={onOpen} fontSize={'xl'} fontWeight={'bold'} color={'blue.500'} marginRight={'5px'}> {plateNumber}</Link><Flex direction={'column'} justifyContent={'center'}><HiOutlineExternalLink size={'18px'} /></Flex></Flex>
            <Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior='inside' size={['lg', '4xl', '6xl']} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Flex gap={'5'} justifyContent={'center'}>
                            <Flex direction={'column'} justifyContent={'center'}>
                                <Text> Vehicle Record of {plateNumber}</Text>
                            </Flex>


                        </Flex>

                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Container maxW='container.xl'>
                            {(isPending) ? <Text>Please wait loading vehicle records</Text> :

                                <Card width={'full'} border={'2px'} borderColor={'gray.300'} borderStyle={'dashed'}>
                                    <CardHeader>
                                        <Text  fontFamily={'Fira Mono'} fontWeight={500}>Plate Number</Text>
                                        <Heading size={'4xl'}>{data['tolls'][0]['plate_number']}</Heading>

                                    </CardHeader>
                                    <CardBody>
                                        <Flex justifyContent={'space-between'} wrap={'wrap'}>
                                            <Flex direction={'column'}>
                                                <Text fontFamily={'Fira Mono'} fontWeight={500}>Total Due Amount</Text>
                                                <Heading>₹{data['due_amount']}</Heading>
                                            </Flex>
                                            <Barcode lineColor={(colorMode === 'light') ? "#000000" : "#FFFFFF"} value={plateNumber} height={'90'}></Barcode>
                                        </Flex>
                                    </CardBody>

                                    <CardFooter borderTop={'2px'} borderStyle={'dashed'} borderColor={'gray'}>


                                        <Flex direction={'column'}>
                                            <Text>Last recorded toll was at</Text>
                                            <Text fontWeight={'bold'}>{formatCustomDate(data['tolls'][0]['time'])}</Text>
                                        </Flex>





                                    </CardFooter>
                                </Card>
                            }
                        </Container>

                        <Container maxW='container.xl' marginTop={'10'}>
                            <Text fontWeight={'bold'} marginBottom={'20px'}>Toll History</Text>

                            <VStack spacing={'5'} paddingBottom={'20'}>
                                {(isPending) ? "Loading" : data['tolls'].map((t) =>

                                    <Card key={t['_id']} width={'full'}>
                                        <CardBody>
                                            <Flex justify={'space-between'} >
                                                <Flex direction={'column'}>

                                                    <Text fontSize={'xl'} fontWeight={'bold'}>{t['plate_number']}</Text>
                                                    <Text>{formatCustomDate(t['time'])} • {t['toll_location']}</Text>
                                                </Flex>
                                                <Flex direction={'column'} justifyContent={'center'}>
                                                    <Text align={'right'} fontWeight={'black'} fontSize={'2xl'} color={'#00ad26'}>
                                                        ₹{t['toll_fee']}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                        </CardBody>
                                    </Card>
                                )
                                }
                            </VStack>

                        </Container>


                    </ModalBody>

                    {/* <ModalFooter borderTop={'2px'} borderStyle={'dotted'} borderColor={'gray'}>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </>
    )
}

export default VehicleProfile   