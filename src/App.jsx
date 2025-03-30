import { Card, CardBody, Text, Container, Heading, Stack, VStack, SkeletonText, Box } from '@chakra-ui/react'
import './App.css'
import VehicleCard from './components/VehicleCard'
import { useEffect, useState } from 'react';
import VehicleListElement from './components/VehicleListElement';

function App() {

  const [recentTollData, setRecentTollData] = useState({})
  const [allTolls, setAllTolls] = useState([])
  useEffect(() => {
    fetch('https://mpmc-backend.onrender.com/get-latest-toll').then((r) => {
      r.json().then((r) => {
        console.log(r);
        setRecentTollData(r)
      })

    })


    fetch('https://mpmc-backend.onrender.com/get-all-tolls').then((r) => {
      r.json().then((r) => {
        console.log(r);

        setAllTolls(r['tolls'])
      })
    })

  }, [])

  return (

    <Container minW='70%'>
      <Card width={'100%'} border={'1px'} borderColor={'grey'} borderWidth={'2px'} borderRadius={'none'} >
        <CardBody padding={'10px'}>
          <Text fontWeight={'bold'} fontSize={'4xl'}>Tolls Record.</Text>
        </CardBody>
      </Card>


      <Container marginTop={'20'} minW='full' padding={'0'}>
        <Heading padding={'10px'} paddingLeft={'0'} size={'md'}>Recent Tolled Vehicle</Heading>

        <Container minW={'full'} padding={'0'}>

          {(recentTollData != {}) ? <VehicleCard plateNumber={recentTollData['plate_number']} recordedTime={recentTollData['time']} location={recentTollData['toll_location']} tollFee={recentTollData['toll_fee']} /> : <VehicleCard />}

        </Container>


      </Container>



      <Container marginTop={'20'} minW='full' padding={'0'}>
        <Heading padding={'10px'} paddingLeft={'0'} size={'md'}>Recent Tolls</Heading>
        <Card overflowY={'scroll'} height={'500px'} maxH={'500px'}>
          <CardBody>
            <VStack spacing={'5px'}>
              {allTolls.map(r => <VehicleListElement key={r['_id']} plateNumber={r['plate_number']} recordedTime={r['time']} tollFee={r['toll_fee']} location={r['toll_location']}></VehicleListElement>)}
            </VStack>
          </CardBody> 
        </Card>
      </Container>



    </Container>


  )
}

export default App
