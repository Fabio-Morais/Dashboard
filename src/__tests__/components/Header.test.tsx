import { fireEvent, render, screen } from '@testing-library/react'

import Header from '@/components/Header'

jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react')
  return {
    ...originalModule,
    useColorMode: jest.fn().mockReturnValue({
      colorMode: 'light',
      toggleColorMode: jest.fn(),
    }),
  }
})

describe('Header', () => {
  test('renders breadcrumb and heading correctly', () => {
    render(<Header path="/" children="Home" />)

    const breadcrumbPagesLink = screen.getByRole('link', { name: /pages/i })
    const breadcrumbCurrentPageLink = screen.getByRole('link', { name: /home/i })
    const heading = screen.getByRole('heading', { name: /home/i })

    expect(breadcrumbPagesLink).toBeInTheDocument()
    expect(breadcrumbCurrentPageLink).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
  })
  test('toggles color mode when the DarkModeSwitch is clicked', () => {
    const { getByTestId } = render(<Header children="My Page" path="/" />)
    const darkModeSwitch = getByTestId('dark-mode-switch')

    // Initial color mode should be light
    expect(darkModeSwitch).toBeInTheDocument()
    expect(darkModeSwitch).toHaveAttribute('data-is-dark-mode', 'false')

    // Simulate a click on the DarkModeSwitch
    fireEvent.click(darkModeSwitch)

    // After the click, isDarkMode state should be true
    expect(darkModeSwitch).toHaveAttribute('data-is-dark-mode', 'true')
  })
})
