import React from 'react';
import "./ProfileIcon.scss";
import { IUser } from "../../../_store/interfaces/interfaces";

interface IProps {
  user: IUser;
}

const ProfileIcon: React.FC<IProps> = ({user}) => {
  return (
    <div className="profile__icon">
      {user.firstName[0]}{user.lastName[0]}
    </div>
  );
};

export default ProfileIcon;