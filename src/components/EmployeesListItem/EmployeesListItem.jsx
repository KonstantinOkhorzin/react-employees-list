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

const EmployeesListItem = () => {
  return (
    <Employee>
      <p>John Smith</p>
      <Salary defaultValue='1000$' />
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
