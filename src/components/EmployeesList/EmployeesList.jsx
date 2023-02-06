import EmployeesListItem from '../EmployeesListItem';

const EmployeesList = ({ employees }) => {
  return (
    <ul>
      {employees.map(({ id, ...restProps }) => (
        <EmployeesListItem key={id} {...restProps} />
      ))}
    </ul>
  );
};

export default EmployeesList;