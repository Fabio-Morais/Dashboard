import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  Icon,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'

import React, { ReactNode, useState } from 'react'
import { ReactText } from 'react'
import { IconType } from 'react-icons'
import { FiCompass, FiHome, FiMenu, FiSettings, FiStar, FiTrendingUp } from 'react-icons/fi'

interface LinkItemProps {
  name: string
  icon: IconType
  link: string
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, link: '/' },
  { name: 'Data', icon: FiTrendingUp, link: '/data' },
]

export default function Sidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const router = useRouter()
  const { colorMode } = useColorMode()
  const image = colorMode === 'dark' ? '/factoryPalWhite.svg' : '/factoryPal.svg'

  const [selectedItemIndex, setSelectedItemIndex] = useState(router.asPath == '/' ? 0 : 1) // Initialize the selected item index

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between" my={4}>
        <Image src={image} alt="My SVG Image" width={250} height={100} />

        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, index) => (
        <NavItem
          key={index}
          icon={link.icon}
          isSelected={selectedItemIndex === index}
          onClick={() => setSelectedItemIndex(index)}
          link={link.link}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
  isSelected: boolean // Updated prop name
  onClick: () => void
  link: string
}

const NavItem = ({ icon, children, isSelected, onClick, link, ...rest }: NavItemProps) => {
  // Updated prop name
  return (
    <Link href={link} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        mb={3}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isSelected ? 'cyan.700' : 'transparent'} // Updated prop name
        color={isSelected ? 'white' : 'inherit'} // Updated prop name
        _hover={
          !isSelected
            ? {
                bg: 'cyan.100',
              }
            : undefined
        }
        onClick={onClick}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={
              !isSelected
                ? {
                    color: 'black',
                  }
                : undefined
            }
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}
interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton variant="outline" onClick={onOpen} aria-label="open menu" icon={<FiMenu />} />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  )
}
