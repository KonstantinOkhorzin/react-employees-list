import PropTypes from 'prop-types';

import EmployeesListItem from '../EmployeesListItem';

const EmployeesList = ({
  employees,
  onDeleteEmployee,
  onToggleIncrease,
  onToggleRise,
  onUpdateSalary,
}) => {
  return (
    <ul>
      {employees.map(({ id, ...restProps }) => (
        <EmployeesListItem
          key={id}
          {...restProps}
          onDeleteEmployee={() => onDeleteEmployee(id)}
          onToggleIncrease={() => onToggleIncrease(id)}
          onToggleRise={() => onToggleRise(id)}
          onUpdateSalary={e => onUpdateSalary(e, id)}
        />
      ))}
    </ul>
  );
};

EmployeesList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default EmployeesList;
