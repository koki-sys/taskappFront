import swal from 'sweetalert'
import { Button, ListItemIcon, MenuItem } from '@mui/material'
import { Logout } from '@mui/icons-material'
import { useSetRecoilState } from 'recoil'
import { UserAtom } from 'atoms/User'
import { Api } from 'config/Api'

export const LogoutBtn = () => {
    const userSet = useSetRecoilState(UserAtom)

    const logout = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        Api.post(`api/logout`).then((res) => {
            if (res.data.status === 200) {
                // usernameの値はないためundefinedでセットされる。
                userSet(res.data.username)
                swal('ログアウトしています...')
                // eslint-disable-next-line no-restricted-globals
                location.reload()
            } else {
                swal('ログアウトできません')
            }
        })
    }

    return (
        <MenuItem>
            <Button variant="text" onClick={logout}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                ログアウト
            </Button>
        </MenuItem>
    )
}
