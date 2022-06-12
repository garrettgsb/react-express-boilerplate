export interface IUser {
  username: string;
  roomId: string;
  score: number;
}

export interface ISocket {
  emit: (eventName: string, sentData: string) => void;
  on: (eventName: string, callback: (message: string) => void) => void;
}