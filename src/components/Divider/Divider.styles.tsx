import { Box, chakra } from '@chakra-ui/react'

const StyledDivider = chakra(Box, {
  baseStyle: {
    boxShadow: '0 4px 8px 0 rgba(94, 134, 134, 0.3)',
    backgroundColor: 'cyan.700',
    width: '60px',
    height: '7px',
    padding: '2px 16px',
  },
})

export default StyledDivider
