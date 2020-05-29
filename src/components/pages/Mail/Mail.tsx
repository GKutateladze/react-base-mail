import React, { useEffect, useRef } from 'react';
import "./Mail.scss";
import PageHeader from "../../atoms/PageHeader/PageHeader";
import MessagePreview from "../../organisms/MessagePreview/MessagePreview";
import { IMessagePreview } from "../../../_store/interfaces/interfaces";
import Router from "./Router";
import Input from "../../molecules/Input/Input";
import { fromEvent, interval, Subscription } from "rxjs";
import { debounce, map } from "rxjs/operators";
import { useDispatch, useSelector } from "react-redux";
import { GetMessages } from "../../../_store/actions/message.actions";
import { IStore } from "../../../_store";

const Mail = () => {
  const dispatch = useDispatch();

  /** Подписываемся на store */
  const messages = useSelector((state: IStore) => state.messages.collection); // Подписка на redux

  const messagesJSX = messages.map((m:IMessagePreview) => <MessagePreview key={m.id} item={m}/>) // На уровне компонента преобразование в JSX

  const ref = useRef<HTMLInputElement>(null)

  // -------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    dispatch({type: GetMessages.Pending})
  }, [])

  // -------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    let stream$: Subscription;
    if (ref.current) {
      stream$ = fromEvent(ref.current, 'keyup')
        .pipe(
          debounce(() => interval(100)),
          map((event: Event) => {
            console.log(event)
            return (event.target as HTMLInputElement).value})
        ).subscribe(
          (value: string) => console.log(value)
        )
    }
    return ()=> stream$ && stream$.unsubscribe();
  }, [])

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className="page-mail">
      <section className="mail__messages">
        <PageHeader header="Почта"/>
        <Input placeholder={'Поиск'} reference={ref}/>
        <div className="messages__wrapper">{messagesJSX}</div>
      </section>
      <div className="mail__details">
        <Router/>
      </div>
    </div>
  );
};

export default Mail;