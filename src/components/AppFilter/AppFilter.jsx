import { Buttons, Button, Input } from './AppFilter.styled';

const AppFilter = ({ filter, onInputChange }) => {
  return (
    <Buttons>
      <label>
        <Input
          type='radio'
          name='filter'
          value='all'
          checked={filter === 'all'}
          onChange={onInputChange}
        />
        <Button>All employees</Button>
      </label>

      <label>
        <Input
          type='radio'
          name='filter'
          value='rise'
          checked={filter === 'rise'}
          onChange={onInputChange}
        />
        <Button>Get promoted</Button>
      </label>

      <label>
        <Input
          type='radio'
          name='filter'
          value='moreThen1000'
          checked={filter === 'moreThen1000'}
          onChange={onInputChange}
        />
        <Button>Salary more than 1000$</Button>
      </label>
    </Buttons>
  );
};

export default AppFilter;
