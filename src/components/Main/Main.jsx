import styled from 'styled-components';
import EmployeesList from '../EmployeesList';

import SearchPanel from '../SearchPanel';

const StyledMain = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]}px;
`;

const Main = ({ filter, search, onInputChange, ...restProps }) => {
  return (
    <StyledMain>
      <SearchPanel filter={filter} search={search} onInputChange={onInputChange} />
      <EmployeesList {...restProps} />
    </StyledMain>
  );
};

export default Main;
