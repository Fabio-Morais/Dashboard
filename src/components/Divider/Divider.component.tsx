import StyledDivider from './Divider.styles'

interface Props {
  mt?: string
  mb?: string
}
const Divider = (props: Props) => {
  return <StyledDivider {...props} />
}

export default Divider
