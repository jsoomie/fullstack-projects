export interface IContact {
  contacts: IState[];
}

export interface IState {
  id: number;
  name: string;
  email: string;
  phone: string;
  type: string;
}

// TODO: Temporary state, will remove
export const initialState: IContact = {
  contacts: [
    {
      id: 1,
      name: "Alice Liddel",
      email: "alice@gmail.com",
      phone: "123-123-1234",
      type: "professional",
    },
    {
      id: 2,
      name: "Lacie Liddel",
      email: "Lacie@gmail.com",
      phone: "098-098-9876",
      type: "personal",
    },
    {
      id: 3,
      name: "Mad Hatter",
      email: "hatter@gmail.com",
      phone: "555-555-5555",
      type: "personal",
    },
  ],
};

export const contactReducer = (state, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
  }
};
