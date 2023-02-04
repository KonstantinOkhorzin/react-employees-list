import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIconButton = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.normal};
  transition: all ${({ theme }) => theme.animation.cubicBezier};
  background-color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  svg {
    fill: currentColor;
    width: 20px;
    height: 20px;
  }
  :hover,
  :focus {
    background-color: #e6e4e4;
  }
`;

const IconButton = ({ children, type = 'button', ...allyProps }) => {
  return (
    <StyledIconButton type={type} {...allyProps}>
      {children}
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
