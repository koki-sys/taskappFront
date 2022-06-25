import { AppBox } from '@/templates/AppBox'
import { TaskBox } from '@/templates/TaskBox'
import { PostBox } from '@/templates/PostBox'
import { OpinionBox } from '@/templates/OpinionBox'
import { ContentLayout, ContentBox } from '@/pages/DashBoard/style'
import { Typography } from '@mui/material'

export const Dashboard = () => {
    return (
        <>
            <ContentLayout
                container
                alignItems="center"
                justifyContent="center"
            >
                <ContentBox item xs={12}>
                    <Typography variant="h6" align="left">
                        ダッシュボード
                    </Typography>
                </ContentBox>
                <ContentBox item md={4}>
                    <AppBox />
                    <TaskBox />
                </ContentBox>
                <ContentBox item md={4}>
                    <PostBox />
                </ContentBox>
                <ContentBox item md={4}>
                    <OpinionBox />
                </ContentBox>
            </ContentLayout>
        </>
    )
}
