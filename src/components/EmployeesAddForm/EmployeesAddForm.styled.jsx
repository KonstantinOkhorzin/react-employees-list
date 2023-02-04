import styled from 'styled-components';

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

export const Form = styled.form`
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