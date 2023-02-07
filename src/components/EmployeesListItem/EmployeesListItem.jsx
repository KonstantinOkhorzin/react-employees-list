import { AiFillStar } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { GrMoney } from 'react-icons/gr';

import {
  Employee,
  Salary,
  Buttons,
  ButtonMoney,
  ButtonDelete,
  ButtonStar,
} from './EmploeesListItem.styled';

const EmployeesListItem = ({
  name,
  salary,
  increase,
  rise,
  onDeleteEmployee,
  onToggleIncrease,
  onToggleRise,
}) => {
  return (
    <Employee increase={increase}>
      <h3>{name}</h3>
      <Salary defaultValue={salary + '$'} />
      <Buttons>
        <ButtonMoney aria-label='money' onClick={onToggleIncrease}>
          <GrMoney />
        </ButtonMoney>
        <ButtonDelete aria-label='delete' onClick={onDeleteEmployee}>
          <MdDelete />
        </ButtonDelete>
        <ButtonStar aria-label='star' rise={rise} onClick={onToggleRise}>
          <AiFillStar />
        </ButtonStar>
      </Buttons>
    </Employee>
  );
};

export default EmployeesListItem;
