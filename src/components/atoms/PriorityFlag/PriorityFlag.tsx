import React from 'react';
import "./PriorityFlag.scss";
import {ReactComponent as Flag} from '../../../assets/svg/flag.svg';

interface IProps {
  flag: boolean;
}

const PriorityFlag: React.FC<IProps> = ({flag}) => {
  return (
    <span className={`priority-flag ${flag ? 'active' : ''}`}>
      <Flag/>
    </span>
  );
};

export default PriorityFlag;