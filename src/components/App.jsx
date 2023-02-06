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
      { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 },
    ]
  }

  render() {
    const { data } = this.state;

    return (
      <Container>
        <AppInfo />
        <Main employees={data} />
        <EmployeesAddForm />
      </Container>
    );
  }
}

export default App;
