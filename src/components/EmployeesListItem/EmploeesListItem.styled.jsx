import styled from 'styled-components';

import IconButton from '../UI/IconButton';

export const Employee = styled.li`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: ${({ theme }) => theme.space[2]}px;
  align-items: center;
  padding: ${({ theme }) => theme.space[4]}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  color: ${({ theme, increase }) => (increase ? theme.colors.yellow : theme.colors.text)};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.m}px;
    grid-template-columns: 2fr 1fr auto;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]}px;
`;

export const Salary = styled.input`
  text-align: center;
  width: 100%;
`;

export const ButtonStar = styled(IconButton)`
  color: ${({ theme, rise }) => (rise ? theme.colors.gold : theme.colors.background)};
`;

export const ButtonMoney = styled(IconButton)`
  color: ${({ theme }) => theme.colors.yellow};
  svg path {
    stroke: currentColor;
  }
`;

export const ButtonDelete = styled(IconButton)`
  color: ${({ theme }) => theme.colors.red};
`;
