import { Component } from 'react';
import { nanoid } from 'nanoid';

import AppInfo from './AppInfo/AppInfo';
import Main from './Main/Main';
import EmployeesAddForm from '../components/EmployeesAddForm';
import Container from './UI/Container';

class App extends Component {
  state = {
    data: [],
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

  render() {
    const { data } = this.state;

    return (
      <Container>
        <AppInfo employees={data} />
        <Main
          employees={data}
          onDeleteEmployee={this.deleteEmployee}
          onToggleIncrease={this.toggleIncrease}
          onToggleRise={this.toggleRise}
        />
        <EmployeesAddForm onCreateEmployee={this.createEmployee} />
      </Container>
    );
  }
}

export default App;
