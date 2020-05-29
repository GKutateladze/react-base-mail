/** Интерфейс стора */
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import messagesReducer, { IMessagesState } from "./reducers/message.reducers";
import { GetMessagesEffect$, GetMessagesEffect1$ } from "./effects/message.effects";

export interface IStore {
  messages: IMessagesState;
}

const observableMiddleware = createEpicMiddleware();

/** Регистрируем редьюсеры */
const reducers = combineReducers({
  messages: messagesReducer
});

/** Создаем store */
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(observableMiddleware)));

/** Регистрируем сайд эффекты */
observableMiddleware.run(
  combineEpics(
    GetMessagesEffect$,
    GetMessagesEffect1$
  )
);