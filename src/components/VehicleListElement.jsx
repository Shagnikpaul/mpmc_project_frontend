import { Card, CardBody, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { formatCustomDate } from '../../utils/TimeDateFormatter'
import VehicleProfile from './VehicleProfile'

function VehicleListElement({ plateNumber, recordedTime, tollFee, location }) {
    return (
        <Card width={'full'}>
            <CardBody>
                <Flex justify={'space-between'}>
                    <Flex direction={'column'}>
                        {/* <Text fontSize={'xl'} fontWeight={'bold'}>{plateNumber}</Text> */}
                        <VehicleProfile plateNumber={plateNumber}></VehicleProfile>
                        <Text>{formatCustomDate(recordedTime)} • {location}</Text>
                    </Flex>
                    <Flex direction={'column'} justifyContent={'center'}>
                        <Text align={'right'} fontWeight={'black'} fontSize={'2xl'} color={'#00ad26'}>
                        ₹{tollFee}
                        </Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default VehicleListElement   