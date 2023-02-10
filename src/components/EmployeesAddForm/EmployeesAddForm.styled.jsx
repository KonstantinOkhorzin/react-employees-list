import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Footer = styled.footer`
  padding: ${({ theme }) => theme.space[4]}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: ${({ theme }) => theme.shadows.small};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: ${({ theme }) => theme.space[5]}px;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.m}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;

export const StyledForm = styled(Form)`
  display: grid;
  gap: ${({ theme }) => theme.space[4]}px;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: inline-grid;
    grid-template-columns: repeat(2, minmax(150px, 350px)) auto;
    gap: ${({ theme }) => theme.space[3]}px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.space[4]}px;
  }
`;

export const Input = styled(Field)`
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

export const Label = styled.label`
  position: relative;
`

export const StyledError = styled.span`
  position: absolute;
  left: 0;
  top: 100%;
  padding-top: ${({ theme }) => theme.space[2]}px;
  padding-bottom: ${({ theme }) => theme.space[2]}px;
  padding-left: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[3]}px;
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.animation.cubicBezier};
`;
