import { HeaderLayout } from 'layouts/Header'
import { Dashboard } from 'pages/DashBoard'
import { Task } from 'pages/Task'
import { useRoutes, Navigate } from 'react-router'
import { LoginPage } from 'pages/LoginPage'
import { RegisterPage } from 'pages/RegisterPage'

export const RootRouter = () => {
    const name = () => localStorage.getItem('auth_name')

    return useRoutes([
        {
            element: name() ? <HeaderLayout /> : <Navigate to="/login" />,
            children: [
                { path: '/', element: <Dashboard /> },
                { path: '/task', element: <Task /> },
                { path: '/task/add', element: <div>Task Add</div> },
                { path: '/application', element: <div>Task Add</div> },
                { path: '/register', element: <RegisterPage /> },
                { path: '/login', element: <LoginPage /> },
            ],
        },
        { path: '*', element: <Navigate to="/404" /> },
    ])
}
