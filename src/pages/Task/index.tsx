import { Typography, Card, CardContent } from '@mui/material'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import { ContentLayout, ContentBox } from '@/pages/Task/style'

export const Task = () => {
    return (
        <>
            <ContentLayout
                container
                alignItems="center"
                justifyContent="center"
            >
                <ContentBox item xs={12}>
                    <Typography variant="h6" align="left">
                        タスク
                        <PlaylistAddIcon
                            sx={{ float: 'right' }}
                            fontSize={'large'}
                        />
                    </Typography>
                </ContentBox>
                <ContentBox item xs={6}>
                    <Card>
                        <CardContent>きよ</CardContent>
                    </Card>
                </ContentBox>
                <ContentBox item xs={6}>
                    <Card>
                        <CardContent>きよ</CardContent>
                    </Card>
                </ContentBox>
            </ContentLayout>
        </>
    )
}
