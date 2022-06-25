import { Register } from '@/templates/Register'
import { ContentBox, ContentLayout } from '@/pages/RegisterPage/style'

export const RegisterPage = () => {
    return (
        <>
            <ContentLayout
                container
                alignItems="center"
                justifyContent="center"
            >
                <ContentBox item xs={12}>
                    <Register />
                </ContentBox>
            </ContentLayout>
        </>
    )
}
