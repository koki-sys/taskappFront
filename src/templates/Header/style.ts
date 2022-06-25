import { AppBar } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

export const AppHeader = styled(AppBar)({
    backgroundColor: '#2B303A',
})

export const NavTitle = styled(Link)({
    textDecoration: 'none',
    color: '#D8DBE2',
    '&:hover': {
        textDecoration: 'none',
    },
})

export const AuthLink = styled(Link)({
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'none',
    },
})
