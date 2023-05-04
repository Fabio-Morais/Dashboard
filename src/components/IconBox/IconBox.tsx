import { Flex, useColorModeValue } from '@chakra-ui/react'

export default function IconBox(props: { icon: JSX.Element | string }) {
  const { icon } = props
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

  return (
    <Flex alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} w="56px" h="56px" bg={boxBg}>
      {icon}
    </Flex>
  )
}
