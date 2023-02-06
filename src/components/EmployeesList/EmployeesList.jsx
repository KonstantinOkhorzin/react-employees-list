import EmployeesListItem from '../EmployeesListItem';

const EmployeesList = ({ employees, onDeleteEmployee }) => {
  return (
    <ul>
      {employees.map(({ id, ...restProps }) => (
        <EmployeesListItem key={id} {...restProps} onDeleteEmployee={() => onDeleteEmployee(id)} />
      ))}
    </ul>
  );
};

export default EmployeesList;
