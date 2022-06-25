import { Login } from '@/templates/Login'
import { ContentBox, ContentLayout } from '@/pages/LoginPage/style'

export const LoginPage = () => {
    return (
        <>
            <ContentLayout
                container
                alignItems="center"
                justifyContent="center"
            >
                <ContentBox item xs={12}>
                    <Login />
                </ContentBox>
            </ContentLayout>
        </>
    )
}
