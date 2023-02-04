import styled from 'styled-components';
import EmployeesList from '../EmployeesList';

import SearchPanel from '../SearchPanel';

const StyledMain = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]}px;
`;

const Main = () => {
  return (
    <StyledMain>
      <SearchPanel />
      <EmployeesList />
    </StyledMain>
  );
};

export default Main;
