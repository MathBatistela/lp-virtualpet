export interface IPet {
  id: number;
  userId: number;
  name: string;
  skin: string;
  state: string;
  health: number;
  hunger: number;
  energy: number;
  dirty: number;
  happiness: number;
  referenceTime: number;
  lastScene: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  pets: IPet[];
}

export interface IUserActions {
  message: string;
  id: number;
}
