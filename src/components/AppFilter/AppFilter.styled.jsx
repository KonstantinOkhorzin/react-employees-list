import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]}px;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.space[1]}px;
    justify-content: flex-start;
  }
`;

export const Button = styled.p`
  display: inline-flex;
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  transition: all ${({ theme }) => theme.animation.cubicBezier};
  :hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  margin: -1px;
  :checked + ${Button} {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
  }
  :focus + ${Button} {
    box-shadow: ${({ theme }) => theme.shadows.outline};
  }
`;
