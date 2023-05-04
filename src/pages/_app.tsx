import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import '@/styles/globals.css'
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}{' '}
      </QueryClientProvider>
    </ChakraProvider>
  )
}
