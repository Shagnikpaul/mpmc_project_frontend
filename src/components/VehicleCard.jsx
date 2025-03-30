import { Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { formatCustomDate } from '../../utils/TimeDateFormatter'
import { CiLocationArrow1 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
function VehicleCard({ plateNumber = "XXX_XXX_XXX", recordedTime = "2025-03-30T12:10:41.251+00:00", location = "Area 51", tollFee = 0.0 }) {

    return (
        <Card>
            <CardHeader>
                <Text>Licence Plate Number</Text>
                <Heading size={['xl','2xl','4xl']} fontWeight={'black'}>{plateNumber}</Heading>
            </CardHeader>
            <CardBody>
                <Text>Toll Fee</Text>
                <Heading>₹{tollFee}</Heading>
            </CardBody>
            <CardFooter>
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