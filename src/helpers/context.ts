import {createContext} from 'react'

export type LoginModalContextType = {
  isLoginModalOpen: boolean
  setIsLoginModalOpen: (open: boolean) => void
}

export const LoginModalContext = createContext<LoginModalContextType>({
  isLoginModalOpen: false,
  setIsLoginModalOpen: (open: boolean) => {},
})
export type ProfileModalContextType = {
  isProfileModalOpen: boolean
  setIsProfileModalOpen: (open: boolean) => void
}

export const ProfileModalContext = createContext<ProfileModalContextType>({
  isProfileModalOpen: false,
  setIsProfileModalOpen: (open: boolean) => {},
})

export enum ActionTypeEnum {
  ADD,
  REMOVE,
  UPDATE,
  LIST,
  REFRESH,
  NONE,
}

export type ActionType = {
  action: {type: ActionTypeEnum; bookId?: string}
  setAction: (action: {type: ActionTypeEnum; bookId?: string}) => void
}

export const ActionContext = createContext<ActionType>({
  action: {type: ActionTypeEnum.NONE},
  setAction: (action: {type: ActionTypeEnum; bookId?: string}) => {},
})
