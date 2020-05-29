export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  photo?: string;
}

export interface IMessagePreview {
  id: string;
  title: string;
  time: string;
  shortText: string;
  files: string[];
  priorityFlag: boolean;
  status: string;
  from: IUser;
}

export interface IMessage extends IMessagePreview {
  text: string;
}

export interface IMap<T> {
  [key: string]: T
}
