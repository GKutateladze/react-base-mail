import { createActions } from "redux-actions";
import { IMessagePreview } from "../interfaces/interfaces";

/** Получение списка всех сообщений */
export enum GetMessages{
  Pending = '[Pending] Получение списка всех сообщений',
  Success = '[Success] Получение списка всех сообщений'
}

createActions({
  [GetMessages.Pending]: undefined,
  [GetMessages.Success]: (payload: IMessagePreview[]) => payload
});