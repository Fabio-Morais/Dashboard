import { Flex, useColorModeValue } from '@chakra-ui/react'

export default function IconBox(props: { icon: JSX.Element | string }) {
  const { icon } = props
  const boxBg = useColorModeValue('gray.50', 'white.100')

  return (
    <Flex alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} w="66px" h="66px" bg={boxBg}>
      {icon}
    </Flex>
  )
}
