import { Buttons, Button, Input } from './AppFilter.styled';

const AppFilter = () => {
  return (
    <Buttons>
      <label>
        <Input type='radio' name='filter' value='all' />
        <Button>All employees</Button>
      </label>

      <label>
        <Input type='radio' name='filter' value='rise' />
        <Button>Get promoted</Button>
      </label>

      <label>
        <Input type='radio' name='filter' value='moreThen1000' />
        <Button>Salary more than 1000$</Button>
      </label>
    </Buttons>
  );
};

export default AppFilter;
