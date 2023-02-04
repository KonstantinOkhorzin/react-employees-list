import styled from 'styled-components';

export const Header = styled.header`
  padding: ${({ theme }) => theme.space[4]}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: ${({ theme }) => theme.shadows.small};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.heading};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: ${({ theme }) => theme.space[5]}px;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
  }
`;

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;
