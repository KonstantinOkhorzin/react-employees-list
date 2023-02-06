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

const EmployeesListItem = ({ name, salary, increase }) => {
  return (
    <Employee increase={increase}>
      <p>{name}</p>
      <Salary defaultValue={salary + '$'} />
      <Buttons>
        <ButtonMoney aria-label='money'>
          <GrMoney />
        </ButtonMoney>

        <ButtonDelete aria-label='delete'>
          <MdDelete />
        </ButtonDelete>

        <ButtonStar aria-label='star'>
          <AiFillStar />
        </ButtonStar>
      </Buttons>
    </Employee>
  );
};

export default EmployeesListItem;
