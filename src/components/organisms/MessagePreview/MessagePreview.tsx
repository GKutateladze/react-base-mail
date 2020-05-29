import React from 'react';
import './MessagePreview.scss';
import MessageHeader from "../../molecules/MessageHeader/MessageHeader";
import PriorityFlag from "../../atoms/PriorityFlag/PriorityFlag";
import { IMessagePreview } from "../../../_store/interfaces/interfaces";
import { ReactComponent as File } from '../../../assets/svg/file.svg';
import { NavLink } from "react-router-dom";

interface IProps {
  item: IMessagePreview;
}

const MessagePreview: React.FC<IProps> = ({ item }) => {
  const subtext = <>
    <span>{item.time}</span>
    {item.files.length > 0 && <span className='header__attachment'><File/></span>}
  </>;

  return (
    <NavLink to={`/mail/${item.id}`} className='message__preview'>
      <div className="message__content">
        <div className="header__wrapper">
          <MessageHeader item={item} subText={subtext}/>
          <PriorityFlag flag={item.priorityFlag}/>
        </div>
        <article className="message__preview-article">
          <h4 className="message__preview-title">{item.title}</h4>
          <p className="message__preview-body">{item.shortText}</p>
        </article>
      </div>
    </NavLink>
  );
};

export default MessagePreview;