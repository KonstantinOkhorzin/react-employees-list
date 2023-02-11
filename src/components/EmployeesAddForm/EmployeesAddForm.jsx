import { Formik, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import PropTypes from 'prop-types';

import Button from '../UI/Button';
import { Footer, Title, Input, StyledForm, Label, StyledError } from './EmployeesAddForm.styled';

const schema = object({
  name: string().min(3).required(),
  salary: number().required().positive().integer(),
});

const initialValues = {
  name: '',
  salary: '',
};

const EmployeesAddForm = ({ onCreateEmployee }) => {
  
  const onFormSubmit = (values, { resetForm }) => {
    onCreateEmployee(values);
    resetForm();
  };

  return (
    <Footer>
      <Title>Add new employee</Title>
      <Formik initialValues={initialValues} onSubmit={onFormSubmit} validationSchema={schema}>
        <StyledForm>
          <Label>
            <Input placeholder='What is his/her name?' name='name' />
            <ErrorMessage name='name' component={StyledError} />
          </Label>
          <Label>
            <Input type='number' placeholder='Salary in $?' name='salary' />
            <ErrorMessage name='salary' component={StyledError} />
          </Label>
          <Button type='submit'>Add</Button>
        </StyledForm>
      </Formik>
    </Footer>
  );
};

EmployeesAddForm.propTypes = {
  onCreateEmployee: PropTypes.func.isRequired,
};

export default EmployeesAddForm;
