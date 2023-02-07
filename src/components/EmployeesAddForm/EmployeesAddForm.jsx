import { Component } from 'react';

import Input from '../UI/Input';
import Button from '../UI/Button';
import { Footer, Title, Form } from './EmployeesAddForm.styled';

const INITIAL_STATE = {
  name: '',
  salary: '',
};

class EmployeesAddForm extends Component {
  state = { ...INITIAL_STATE };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onCreateEmployee(this.state);
    this.resetState();
  };

  resetState = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <Footer>
        <Title>Add new employee</Title>
        <Form onSubmit={this.onFormSubmit}>
          <Input placeholder='What is his/her name?' name='name' value={name} onChange={this.onInputChange} />
          <Input
            type='number'
            placeholder='Salary in $?'
            name='salary'
            value={salary}
            onChange={this.onInputChange}
          />
          <Button type='submit'>Add</Button>
        </Form>
      </Footer>
    );
  }
}

export default EmployeesAddForm;
