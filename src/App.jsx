import { Card, CardBody, Text, Container, Heading, VStack } from '@chakra-ui/react'
import './App.css'
import VehicleCard from './components/VehicleCard'


import { useQuery } from '@tanstack/react-query';
import RecentTolls from './components/RecentTolls';




function App() {


  const { isPending, error, data } = useQuery({
    queryKey: ['latestTollRecord'],
    queryFn: async () => {
      const response = await fetch(
        'https://mpmc-backend.onrender.com/get-latest-toll',
      )
      return await response.json()
    },
    refetchInterval: 6000,
    refetchOnWindowFocus: true
  })



  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (



    <Container minW='70%'>
      <Card width={'100%'} border={'1px'} borderColor={'grey'} borderStyle={'dashed'} borderWidth={'2px'} borderRadius={'none'} >
        <CardBody padding={'10px'}>
          <Text fontWeight={'bold'} fontSize={'4xl'}>Tolls Record.</Text>
        </CardBody>
      </Card>


      <Container marginTop={'20'} minW='full' padding={'0'}>
        <Heading padding={'10px'} paddingLeft={'0'} size={'md'}>Recent Recorded Vehicle</Heading>

        <Container minW={'full'} padding={'0'}>

          <VehicleCard plateNumber={data.plate_number} location={data.toll_location} tollFee={data.toll_fee} recordedTime={data.time}></VehicleCard>

        </Container>
        <RecentTolls />

      </Container>



      



    </Container>

  )
}

export default App
