//Interfaces
export interface OwnersState {
  owners: Owner[];
  activeOwnerIndex: number;
}

export interface Owner {
  age: number;
  id: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  favoriteFruit: string;
}

export const emptyOwner: Owner = {
  age: 0,
  id: 0,
  name: '',
  gender: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: '',
  favoriteFruit: '',
};
