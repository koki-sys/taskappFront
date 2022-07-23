import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

type UserType = {
    name: string,
    
}

const { persistAtom } = recoilPersist({
    key: "recoil-persist",
    storage: sessionStorage
})

export const UserAtom = atom<UserType>({
    key: 'auth_name',
    default: undefined,
    effects_UNSTABLE: [persistAtom]
})
