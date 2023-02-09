import { Buttons, Button, Input } from './AppFilter.styled';

const AppFilter = ({ filter, onInputChange }) => {
  const filterData = [
    { name: 'all', label: 'All employees' },
    { name: 'rise', label: 'Get promoted' },
    { name: 'moreThen1000', label: 'Salary more than 1000$' },
  ];

  return (
    <Buttons>
      {filterData.map(({ name, label }) => (
        <label key={name}>
          <Input
            type='radio'
            name='filter'
            value={name}
            checked={filter === name}
            onChange={onInputChange}
          />
          <Button>{label}</Button>
        </label>
      ))}
    </Buttons>
  );
};

export default AppFilter;
