import { Outlet } from 'react-router-dom'
import { Header } from '@/templates/Header'

export const HeaderLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
