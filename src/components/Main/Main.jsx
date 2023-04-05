import styled from 'styled-components';
import EmployeesList from '../EmployeesList';
import DefaultMessage from '../DefaultMessage';

import SearchPanel from '../SearchPanel';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]}px;
`;

const Main = ({ filter, query, onInputChange, employees, ...restProps }) => {
  return (
    <StyledMain>
      <SearchPanel filter={filter} query={query} onInputChange={onInputChange} />
      {employees.length < 1 ? (
        <DefaultMessage message={'Employees not found'} />
      ) : (
        <EmployeesList employees={employees} {...restProps} />
      )}
    </StyledMain>
  );
};

export default Main;
