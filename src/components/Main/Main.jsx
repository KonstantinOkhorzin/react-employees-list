import styled from 'styled-components';
import EmployeesList from '../EmployeesList';

import SearchPanel from '../SearchPanel';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]}px;
`;

const Main = ({ filter, query, onInputChange, ...restProps }) => {
  return (
    <StyledMain>
      <SearchPanel filter={filter} query={query} onInputChange={onInputChange} />
      <EmployeesList {...restProps} />
    </StyledMain>
  );
};

export default Main;
