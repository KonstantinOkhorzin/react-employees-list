import { Component } from 'react';
import { nanoid } from 'nanoid';

import AppInfo from './AppInfo/AppInfo';
import Main from './Main/Main';
import EmployeesAddForm from '../components/EmployeesAddForm';
import Container from './UI/Container';

class App extends Component {
  state = {
    data: [],
    filter: 'all',
    search: '',
  };

  componentDidMount() {
    const employees = localStorage.getItem('employees');
    const parsedEmployees = JSON.parse(employees);

    if (parsedEmployees) {
      this.setState({ data: parsedEmployees });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState.data) {
      localStorage.setItem('employees', JSON.stringify(this.state.data));
    }
  }

  createEmployee = userData => {
    const newEmployee = {
      ...userData,
      increase: false,
      rise: false,
      id: nanoid(),
    };
    this.setState(({ data }) => ({
      data: [...data, newEmployee],
    }));
  };

  deleteEmployee = id => {
    this.setState(({ data }) => ({ data: data.filter(item => item.id !== id) }));
  };

  toggleIncrease = id => {
    this.setState(({ data }) => ({
      data: data.map(item => (item.id === id ? { ...item, increase: !item.increase } : item)),
    }));
  };

  toggleRise = id => {
    this.setState(({ data }) => ({
      data: data.map(item => (item.id === id ? { ...item, rise: !item.rise } : item)),
    }));
  };

  inputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  searchEmployees = (data, search) => {
    const normalizedSearch = search.toLowerCase();
    return data.filter(employee => employee.name.toLowerCase().includes(normalizedSearch));
  };

  getFilteredEmployees = (data, filter) => {
    switch (filter) {
      case 'all':
        return data;
      case 'rise':
        return data.filter(item => item.rise);
      case 'moreThen1000':
        return data.filter(item => item.salary > 1000);
      default:
        return data;
    }
  };

  updateSalary = (e, id) => {
    this.setState(({ data }) => ({
      data: data.map(item =>
        item.id === id
          ? { ...item, salary: parseInt(e.target.value.replace(/\D/g, '')) || 0 }
          : item
      ),
    }));
  };

  render() {
    const { data, filter, search } = this.state;
    const visibleEmployees = this.getFilteredEmployees(this.searchEmployees(data, search), filter);

    return (
      <Container>
        <AppInfo employees={data} />
        <Main
          employees={visibleEmployees}
          onDeleteEmployee={this.deleteEmployee}
          onToggleIncrease={this.toggleIncrease}
          onToggleRise={this.toggleRise}
          onInputChange={this.inputChange}
          filter={filter}
          search={search}
          onUpdateSalary={this.updateSalary}
        />
        <EmployeesAddForm onCreateEmployee={this.createEmployee} />
      </Container>
    );
  }
}

export default App;
