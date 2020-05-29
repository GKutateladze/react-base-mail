import { IMessagePreview, IMap, IUser, IMessage } from "../_store/interfaces/interfaces";

export const status: IMap<string> = {
  1: 'unread',
  2: 'read',
  3: 'replied'
};

export const users: IUser[] = [
  {
    id: "1",
    firstName: "Барон",
    lastName: "Ривендер",
    position: "Глава города"
  },
  {
    id: "2",
    firstName: "Антонио",
    lastName: "Маргаретти",
    position: "Конусльтант"
  },
  {
    id: "3",
    firstName: "Бот",
    lastName: "Помощник",
    position: "Бот помощник"
  }
];

export const shortMessages: IMessagePreview[] = [
  {
    id: '1',
    title: 'Добро пожаловать!',
    time: '12:00',
    shortText: 'Мы рады приветствовать вас! ...',
    files: [],
    priorityFlag: false,
    status: '1',
    from: users[1]
  },
  {
    id: '2',
    title: 'Результаты тестирования',
    time: '12:30',
    shortText: 'Постоянный количественный рост и сфера нашей активности ...',
    files: ['1'],
    priorityFlag: true,
    status: '2',
    from: users[0]
  },
  {
    id: '3',
    title: "Подключение сервисов",
    time: '13:30',
    shortText: 'Подключить сервисы С ...',
    files: [],
    priorityFlag: false,
    status: '1',
    from: users[2]
  }
];

export const message: IMap<IMessage> =
  {
    1: {
      id: '1',
      title: 'Добро пожаловать в почту',
      time: '12:00',
      shortText: 'Мы рады приветствовать вас! ...',
      text: 'Мы рады приветствовать вас! Мы рады вашему решению прийти работать в нашу компанию.\nИ надеемся, что наше сотрудничество будет взаимно полезным и приятным...',
      files: [],
      priorityFlag: false,
      status: '2',
      from: users[1]
    },
    2: {
      id: '2',
      title: 'Письмо 2',
      time: '12:00',
      shortText: 'Мы рады приветствовать вас в холдинге! ...',
      text: 'Мы рады приветствовать вас в холдинге! Мы рады вашему решению прийти работать в нашу компанию.\nИ надеемся, что наше сотрудничество будет взаимно полезным и приятным...',
      files: [],
      priorityFlag: false,
      status: '2',
      from: users[2]
    },
    3: {
      id: '3',
      title: 'Письмо 3',
      time: '12:00',
      shortText: 'Мы рады приветствовать вас в холдинге! ...',
      text: 'Штейгер полевой шпат.\nоковский...',
      files: [],
      priorityFlag: false,
      status: '2',
      from: users[2]
    },
  };
