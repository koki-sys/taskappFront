import {
    Toolbar,
    Avatar,
    Button,
    Typography,
    IconButton,
    Menu,
} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import { AppHeader, AuthLink, NavTitle } from '@/templates/Header/style'
import { useState } from 'react'
import { LogoutBtn } from '@/templates/Logout'

export const Header = () => {
    const isAuth = localStorage.getItem('auth_name')

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppHeader>
            <Toolbar>
                <Typography variant="h6">
                    <NavTitle to="/">TaskApp</NavTitle>
                </Typography>
                <div style={{ flexGrow: 1 }}></div>
                {/* 認証用のコンポーネント作成 */}
                {isAuth ? (
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar />
                    </IconButton>
                ) : (
                    <AuthLink to="/login">
                        <Button variant="contained" startIcon={<LoginIcon />}>
                            ログイン
                        </Button>
                    </AuthLink>
                )}
            </Toolbar>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <LogoutBtn />
            </Menu>
        </AppHeader>
    )
}
