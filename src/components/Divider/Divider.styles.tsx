import styled from 'styled-components'

const StyledDivider = styled.div.attrs((props: { mt: string; mb: string }) => props)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 2px 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
`
export default StyledDivider
