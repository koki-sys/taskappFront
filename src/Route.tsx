import { HeaderLayout } from 'layouts/Header'
import { Dashboard } from 'pages/DashBoard'
import { Task } from 'pages/Task'
import { useRoutes, Navigate } from 'react-router'
import { LoginPage } from 'pages/LoginPage'
import { RegisterPage } from 'pages/RegisterPage'
import { useRecoilValue } from 'recoil'
import { UserAtom } from 'atoms/User'
import { LoginHelp } from 'pages/LoginHelp'

export const RootRouter = () => {
    const isUser = useRecoilValue(UserAtom)

    // 未ログイン時
    if (isUser == undefined) {
        return useRoutes([
            {
                element: <HeaderLayout />,
                children: [
                    { path: '/', element: <LoginHelp /> },
                    { path: '/task/*', element: <LoginHelp /> },
                    { path: '/register', element: <RegisterPage /> },
                    { path: '/login', element: <LoginPage /> },
                ],
            },
            { path: '*', element: <Navigate to="/404" /> },
        ])
    }

    // ログイン時
    return useRoutes([
        {
            element: <HeaderLayout />,
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
