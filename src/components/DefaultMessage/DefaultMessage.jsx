import styled from "styled-components";

const Message = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-left: 16px;
  padding-right: 16px;
`;

const DefaultMessage = ({ message }) => {
  return <Message>{message}</Message>;
};

export default DefaultMessage;
