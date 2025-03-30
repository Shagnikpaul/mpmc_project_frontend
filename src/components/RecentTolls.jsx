import React from 'react'
import { Card, CardBody, Text, Container, Heading, VStack } from '@chakra-ui/react'
import VehicleListElement from './VehicleListElement'


import { useQuery } from '@tanstack/react-query';

function RecentTolls() {

    const allTollsQuery = useQuery({
        queryKey: ['allTolls'],
        queryFn: async () => {
            const res = await fetch('https://mpmc-backend.onrender.com/get-all-tolls')
            return await res.json()
        },
        refetchInterval: 15000
    })

    if (allTollsQuery.isLoading)
        return <Text>Loading...</Text>

    return (
        <Container marginTop={'20'} minW='full' padding={'0'}>
            <Heading padding={'10px'} paddingLeft={'0'} size={'md'}>Recent Tolls</Heading>
            <Card overflowY={'scroll'} height={'500px'} maxH={'500px'}>
                <CardBody>
                    <VStack spacing={'20px'}>
                        {allTollsQuery.data['tolls'].map(r => <VehicleListElement key={r['_id']} plateNumber={r['plate_number']} recordedTime={r['time']} tollFee={r['toll_fee']} location={r['toll_location']}></VehicleListElement>)}
                    </VStack>
                </CardBody>
            </Card>
        </Container>
    )
}

export default RecentTolls