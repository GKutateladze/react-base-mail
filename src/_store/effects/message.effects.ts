/** Получить все сообщения */
import { ActionsObservable, ofType } from "redux-observable";
import { Action } from "redux-actions";
import { GetMessages } from "../actions/message.actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { getMessages } from "../services/message.services";
import { IMessagePreview } from "../interfaces/interfaces";
import { of } from "rxjs";

export const GetMessagesEffect$ = (actions$: ActionsObservable<Action<undefined>>) => {
  return actions$.pipe(
    ofType(GetMessages.Pending),
    switchMap(() => {
      return getMessages().pipe(
        map((data: IMessagePreview[]) => ({type: GetMessages.Success, payload: data})),
        catchError(err => of(err))
      )
    })
  )
};

export const GetMessagesEffect1$ = (actions$: any) => {
  return actions$.pipe(
    ofType('GetMessages.Pending'),
    switchMap(() => {
      return getMessages().pipe(
        map((data: IMessagePreview[]) => ({type: GetMessages.Success, payload: data})),
        catchError(err => of(err))
      )
    })
  )
};