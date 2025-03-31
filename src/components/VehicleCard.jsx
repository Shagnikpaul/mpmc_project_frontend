import { Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text, Divider } from '@chakra-ui/react'
import React from 'react'
import { formatCustomDate } from '../../utils/TimeDateFormatter'
import { CiLocationArrow1 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import '@fontsource/fira-mono';
import Barcode from 'react-barcode';
function VehicleCard({ plateNumber = "XXX_XXX_XXX", recordedTime = "2025-03-30T12:10:41.251+00:00", location = "Area 51", tollFee = 0.0 }) {

    return (
        <Card>
            <CardHeader>
                <Flex justifyContent={'space-between'} wrap={'wrap'}>
                    <Flex direction={'column'}>
                        <Text fontFamily={'Fira Mono'} fontWeight={500}>License Plate Number</Text>
                        <Heading size={['xl', '2xl', '4xl']} fontWeight={'black'}>{plateNumber}</Heading>
                    </Flex>

                </Flex>



            </CardHeader>
            <CardBody>
                <Flex justifyContent={'space-between'} wrap={'wrap-reverse'}>
                    <Flex direction={'column'}>
                        <Text fontFamily={'Fira Mono'} fontWeight={500}>Toll Fee</Text>
                        <Heading>₹{tollFee}</Heading>
                    </Flex>
                    <Barcode lineColor={"#000000"} value={plateNumber} height={'90'}></Barcode>
                </Flex>

            </CardBody>

            <CardFooter borderTop={'3px'} borderStyle={'dashed'} borderColor={'grey'}>
                <Flex width={'full'} justifyContent={'space-between'}>
                    <Flex direction={'column'}>
                        <Flex>
                            <Flex direction={'column'} justifyContent={'center'}>
                                <FaRegClock strokeWidth={'1.5px'} size={'20px'} />
                            </Flex>

                            <Text marginLeft={'2'}>
                                Toll Recorded at
                            </Text>

                        </Flex>


                        <Text fontWeight={'bold'}>{formatCustomDate(recordedTime)}</Text>
                    </Flex>
                    <Flex direction={'column'}>
                        <Flex justifyContent={'end'}>
                            <Flex direction={'column'} justifyContent={'center'}>
                                <CiLocationArrow1 strokeWidth={'1.5px'} size={'20px'} />
                            </Flex>

                            <Text marginLeft={'2'} align={'right'}>
                                Location
                            </Text>
                        </Flex>

                        <Text align={'right'} fontWeight={'bold'}>{location}</Text>
                    </Flex>

                </Flex>

            </CardFooter>
        </Card >
    )
}

export default VehicleCard