import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading, useColorMode } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

interface Props {
  children: string
  path: string
}
const Header = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isDarkMode, setIsDarkMode] = useState(colorMode != 'light')

  useEffect(() => {
    setIsDarkMode(colorMode != 'light')
  }, [colorMode])

  return (
    <Flex justifyContent={'space-between'} align={'center'}>
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Pages</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href={props.path}>{props.children}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading size="xl">{props.children}</Heading>
      </Box>
      <Box mr={'5%'}>
        <DarkModeSwitch
          data-is-dark-mode={isDarkMode ? 'true' : 'false'}
          data-testid="dark-mode-switch"
          checked={!isDarkMode}
          onChange={() => {
            setIsDarkMode((prev) => !prev)
            toggleColorMode()
          }}
          sunColor={'#ceb63d'}
          moonColor={'black'}
          size={40}
        />
      </Box>
    </Flex>
  )
}

export default Header
