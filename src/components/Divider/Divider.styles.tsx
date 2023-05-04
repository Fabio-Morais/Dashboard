import { Box, chakra } from '@chakra-ui/react'

const StyledDivider = chakra(Box, {
  baseStyle: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
    padding: '2px 16px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
})

export default StyledDivider
