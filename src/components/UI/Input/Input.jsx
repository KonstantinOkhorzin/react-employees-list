import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: ${({ theme }) => theme.shadows.small};
  background-color: ${({ theme }) => theme.colors.background};
  transition: ${({ theme }) => theme.animation.cubicBezier};
  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.black};
    outline: 2px solid ${({ theme }) => theme.colors.black};
  }
`;


const Input = ({...props}) => {
    return <StyledInput {...props} />;
};

export default Input;