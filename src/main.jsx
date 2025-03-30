
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'




const theme = extendTheme({
  fonts: {
    heading: `'Inter Variable', sans-serif`,
    body: `'Inter Variable', sans-serif`,
  },
})




const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(

  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ChakraProvider>
)
