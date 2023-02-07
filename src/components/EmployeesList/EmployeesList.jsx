import EmployeesListItem from '../EmployeesListItem';

const EmployeesList = ({ employees, onDeleteEmployee, onToggleIncrease, onToggleRise }) => {
  return (
    <ul>
      {employees.map(({ id, ...restProps }) => (
        <EmployeesListItem
          key={id}
          {...restProps}
          onDeleteEmployee={() => onDeleteEmployee(id)}
          onToggleIncrease={() => onToggleIncrease(id)}
          onToggleRise={() => onToggleRise(id)}
        />
      ))}
    </ul>
  );
};

export default EmployeesList;
