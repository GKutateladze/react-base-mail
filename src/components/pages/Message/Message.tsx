import React, { useState } from 'react';
import "./Message.scss";
import MessageHeader from "../../molecules/MessageHeader/MessageHeader";
import Button from "../../molecules/Button/Button";
import PriorityFlag from "../../atoms/PriorityFlag/PriorityFlag";
import Modal from "../../molecules/Modal/Modal";
import { message } from "../../../_mocks/mocks";
import useReactRouter from 'use-react-router';

const Message = () => {

  const { location } = useReactRouter();
  const tmp = location.pathname.split('/');
  const id = tmp[tmp.length - 1];
  console.log(id)

  let item = message[id];

  const [state, setState] = useState(false)

  const onClick = () => {
    setState(!state)
  };
  return (
    <div>
      {item &&
      <>
        <header className="message-header">
          <MessageHeader item={item} subText={item.from.position}/>
          <div className="message-options">
            <p className="message-time">{item.time}</p>
            <PriorityFlag flag={item.priorityFlag}/>
          </div>
        </header>
        <article className="message__article">
          <h1 className="message__article-title">{item.title}</h1>
          <pre className="message__article-body">{item.text}</pre>
          <Button label="Ответить" handler={onClick}/>
        </article>
        {state && <Modal onClose={() => setState(false)}>Modal</Modal>}
      </>
      }
    </div>
  );
};

export default Message;