import styled from 'styled-components';
import PropTypes from 'prop-types';

import AppFilter from '../AppFilter';
import Input from '../UI/Input';

const StyledSearchPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]}px;
  padding: ${({ theme }) => theme.space[4]}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: ${({ theme }) => theme.shadows.small};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: ${({ theme }) => theme.space[5]}px;
  }
`;

const SearchPanel = ({ filter, query, onInputChange }) => {
  return (
    <StyledSearchPanel>
      <Input placeholder={'Find employee'} name='query' value={query}  onChange={onInputChange} />
      <AppFilter filter={filter} onInputChange={onInputChange} />
    </StyledSearchPanel>
  );
};

SearchPanel.propTypes = {
  query: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SearchPanel;
