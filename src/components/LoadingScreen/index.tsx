import { Text, VStack } from '@chakra-ui/react'

import React from 'react'
import { HashLoader } from 'react-spinners'

const LoadingScreen = () => {
  return (
    <VStack
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
      gap={10}
    >
      <HashLoader size={150} color="#36d7b7" />
    </VStack>
  )
}

export default LoadingScreen
