import { Component } from 'react';

import AppInfo from './AppInfo/AppInfo';
import Main from './Main/Main';
import EmployeesAddForm from '../components/EmployeesAddForm';
import Container from './UI/Container';

class App extends Component {
  state = {
    data: [
      { name: 'John C.', salary: 800, increase: false, rise: false, id: 1 },
      { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
      { name: 'Carl W.', salary: 5000, increase: false, rise: true, id: 3 },
    ],
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
        <AppInfo />
        <Main
          employees={data}
          onDeleteEmployee={this.deleteEmployee}
          onToggleIncrease={this.toggleIncrease}
          onToggleRise={this.toggleRise}
        />
        <EmployeesAddForm />
      </Container>
    );
  }
}

export default App;
