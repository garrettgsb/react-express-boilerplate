import {createContext} from 'react'

export const CheckedContext = createContext({ checked: false, setChecked: () => {} });