import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import AppInfo from './AppInfo/AppInfo';
import Main from './Main/Main';
import EmployeesAddForm from '../components/EmployeesAddForm';
import Container from './UI/Container';

const App = () => {
  const [employees, setEmployees] = useState(
    () => JSON.parse(window.localStorage.getItem('employees')) ?? []
  );
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    window.localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const createEmployee = employeeData => {
    const newEmployee = {
      ...employeeData,
      increase: false,
      rise: false,
      id: nanoid(),
    };
    setEmployees(employees => [...employees, newEmployee]);
  };

  const deleteEmployee = id => {
    setEmployees(employees => employees.filter(employee => employee.id !== id));
  };

  const toggleIncrease = id => {
    setEmployees(employees =>
      employees.map(employee =>
        employee.id === id ? { ...employee, increase: !employee.increase } : employee
      )
    );
  };

  const toggleRise = id => {
    setEmployees(employees =>
      employees.map(employee =>
        employee.id === id ? { ...employee, rise: !employee.rise } : employee
      )
    );
  };

  const inputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'filter':
        setFilter(value);
        break;

      case 'query':
        setQuery(value);
        break;

      default:
        return;
    }
  };

  const searchEmployees = (employees, query) => {
    const normalizedSearch = query.toLowerCase();
    return employees.filter(employee => employee.name.toLowerCase().includes(normalizedSearch));
  };

  const getFilteredEmployees = (employees, filter) => {
    switch (filter) {
      case 'all':
        return employees;
      case 'rise':
        return employees.filter(item => item.rise);
      case 'moreThen1000':
        return employees.filter(item => item.salary > 1000);
      default:
        return employees;
    }
  };

  const updateSalary = (e, id) => {
    setEmployees(employees =>
      employees.map(employee =>
        employee.id === id
          ? { ...employee, salary: parseInt(e.target.value.replace(/\D/g, '')) || 0 }
          : employee
      )
    );
  };

  const visibleEmployees = getFilteredEmployees(searchEmployees(employees, query), filter);

  return (
    <Container>
      <AppInfo employees={employees} />
      <Main
        employees={visibleEmployees}
        onDeleteEmployee={deleteEmployee}
        onToggleIncrease={toggleIncrease}
        onToggleRise={toggleRise}
        onInputChange={inputChange}
        filter={filter}
        search={query}
        onUpdateSalary={updateSalary}
      />
      <EmployeesAddForm onCreateEmployee={createEmployee} />
    </Container>
  );
};

export default App;
