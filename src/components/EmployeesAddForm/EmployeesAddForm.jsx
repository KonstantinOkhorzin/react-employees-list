import Input from '../UI/Input';
import Button from '../UI/Button';
import { Footer, Title, Form} from './EmployeesAddForm.styled';

const EmployeesAddForm = () => {
  return (
    <Footer>
      <Title>Add new employee</Title>
      <Form>
        <Input placeholder="What is his/her name?" />
        <Input type='number' placeholder="Salary in $?"/>
        <Button type='submit'>Add</Button>
      </Form>
    </Footer>
  );
};

export default EmployeesAddForm;
