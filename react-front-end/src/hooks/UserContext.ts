import {createContext} from 'react'

export type IUser = {
  id?: string | number;
  username: string;
  email: string;
  password: string;
  background_hex?: string;
  accent_hex?: string;
  text_hex?: string;
  prompts?: boolean;
  private?: boolean;
  date_created?: string;
  body_font_id?: string | number;
  title_font_id?: string | number;
  body_script?: string;
  title_script?: string;
}
export const UserContext = createContext<any>(null);


// for accessing the user
// import { useContext } from 'react';
// import { UserContext, IUser } from './UserContext';
// in the functional component:
//  const { user } = useContext(UserContext);

// for setting the user
// import {useContext} from 'react';
// import { UserContext, IUser } from './UserContext';
// in the functional component:
//  const {setUser} = useContext(UserContext);