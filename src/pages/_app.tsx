import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import '@/styles/globals.css'
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {isReady && <Component {...pageProps} />}
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}{' '}
      </QueryClientProvider>
    </ChakraProvider>
  )
}
