import { IMessage, IMessagePreview } from "../interfaces/interfaces";
import { handleActions } from "redux-actions";
import { GetMessages } from "../actions/message.actions";

export interface IMessagesState {
  collection: IMessagePreview[];
  selection: IMessage | null;
}

const initialState: IMessagesState = {
  collection: [],
  selection: null
};

/** Reducer сообщений */

const messagesReducer = handleActions({
  [GetMessages.Success]: (state: IMessagesState, action: any) => {
    return {
      ...state,
      collection: action.payload
    }
  }
}, initialState);

export default messagesReducer;