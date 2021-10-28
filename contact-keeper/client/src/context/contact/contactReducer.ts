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

export const initialState: IContact = {
  contacts: [
    {
      id: 1,
      name: "Alice Liddel",
      email: "alice@gmail.com",
      phone: "123-123-1234",
      type: "professional",
    },
  ],
};

export const contactReducer = () => {
  console.log("CONTACT REDUCER");
};
