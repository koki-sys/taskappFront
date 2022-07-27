import { atom } from 'recoil'

type ErrorType = {
    status: number,
    message: string
}

export const ErrorAtom = atom<ErrorType>({
    key: 'errorKey',
    default: undefined,
})
