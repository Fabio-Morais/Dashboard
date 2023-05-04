import { Heading } from '@chakra-ui/react'

import { ReactNode } from 'react'

import Divider from '@/components/Divider'

interface Props {
  children?: string | JSX.Element
}
const Section = (props: Props) => {
  return (
    <>
      <Heading>{props.children}</Heading>
      <Divider mt={'10px'} mb={'20px'} />
    </>
  )
}

export default Section
