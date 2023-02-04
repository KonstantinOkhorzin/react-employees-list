import AppInfo from './AppInfo/AppInfo';
import Main from './Main/Main';
import EmployeesAddForm from '../components/EmployeesAddForm';
import Container from './UI/Container';

const App = () => {
  return (
    <Container>
      <AppInfo />
      <Main />
      <EmployeesAddForm />
    </Container>
  );
};

export default App;
