import { atom } from 'recoil'

type UserType = {
    name: string
}

export const UserAtom = atom<UserType>({
    key: 'auth_name',
    default: undefined,
})
