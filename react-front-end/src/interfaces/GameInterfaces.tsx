export interface IUser {
  username: string;
  roomId: string;
  score: number;
}

export interface IGameProps {
  user: IUser;
  socket: any
}
