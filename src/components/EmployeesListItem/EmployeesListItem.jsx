import PropTypes from 'prop-types';
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
  onUpdateSalary,
}) => {
  return (
    <Employee increase={increase}>
      <h3>{name}</h3>
      <Salary value={salary + '$'} onChange={onUpdateSalary} />
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

 EmployeesListItem.propTypes = {
   name: PropTypes.string.isRequired,
   salary: PropTypes.number.isRequired,
   increase: PropTypes.bool.isRequired,
   rise: PropTypes.bool.isRequired,
   onDeleteEmployee: PropTypes.func.isRequired,
   onToggleIncrease: PropTypes.func.isRequired,
   onToggleRise: PropTypes.func.isRequired,
   onUpdateSalary: PropTypes.func.isRequired,
 };

export default EmployeesListItem;
