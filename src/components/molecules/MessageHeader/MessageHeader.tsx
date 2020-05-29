import React from 'react';
import "./MessageHeader.scss";
import ProfileIcon from "../../atoms/ProfileIcon/ProfileIcon";
import { IMessagePreview } from "../../../_store/interfaces/interfaces";
import { status } from "../../../_mocks/mocks";

interface IProps {
  item: IMessagePreview;
  subText: React.ReactNode;
}

const MessageHeader: React.FC<IProps> = ({item, subText}) => {
  return (
    <header className='message__header'>
      <div className={`message__status ${status[item.status]}`} />
      <ProfileIcon user={item.from}/>
      <div className="message__header-info">
        <h3 className={`header__from ${status[item.status]}`}>
          {item.from.firstName} {item.from.lastName}
        </h3>
        <p className="header__subtext">
          {subText}
        </p>
      </div>
    </header>
  );
};

export default MessageHeader;