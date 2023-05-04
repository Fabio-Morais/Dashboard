import { Divider, Heading } from '@chakra-ui/react'

import { ReactNode } from 'react'

interface Props {
  children?: string | JSX.Element
}
const Section = (props: Props) => {
  return (
    <>
      <Heading>{props.children}</Heading>
      <Divider my={3} />
    </>
  )
}

export default Section
