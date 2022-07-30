import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

type UserType = {
    id: number,
    name: string
}

const { persistAtom } = recoilPersist({
    key: "recoil-persist",
    storage: sessionStorage
})

export const UserAtom = atom<UserType>({
    key: 'auth',
    default: undefined,
    effects_UNSTABLE: [persistAtom]
})
