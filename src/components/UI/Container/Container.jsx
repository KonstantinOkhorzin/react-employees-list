import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1000px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]}px;
  margin-right: auto;
  margin-left: auto;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
