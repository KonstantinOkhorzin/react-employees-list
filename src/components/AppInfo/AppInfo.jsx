import { Header, Title, SubTitle } from './AppInfo.styled';

const AppInfo = ({ employees }) => {
  const totalEmployees = employees.length;
  const totalEmployeesForBonuses = employees.filter(employee => employee.increase).length;
  return (
    <Header>
      <Title>Employees accounting in the company</Title>
      <SubTitle>Total emploees: {totalEmployees}</SubTitle>
      <SubTitle>Extra payment gets: {totalEmployeesForBonuses}</SubTitle>
    </Header>
  );
};

export default AppInfo;
