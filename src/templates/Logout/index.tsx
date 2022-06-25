import swal from 'sweetalert'
import axios from 'axios'
import { Button, ListItemIcon, MenuItem } from '@mui/material'
import { Logout } from '@mui/icons-material'

export const LogoutBtn = () => {
    const logout = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        axios.post(`api/logout`).then((res) => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token')
                localStorage.removeItem('auth_name')
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
