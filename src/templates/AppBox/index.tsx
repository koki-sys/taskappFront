import { CardContent, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import LaunchIcon from '@mui/icons-material/Launch'
import { AppCard, Application } from '@/templates/AppBox/style'

export const AppBox = () => {
    return (
        <AppCard>
            <CardContent>
                <Box>
                    <Typography variant="inherit" align="left">
                        アプリ
                    </Typography>
                    <Link
                        to="/application"
                        style={{ float: 'right', color: '#263238' }}
                    >
                        <LaunchIcon />
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        margin: '0 1.3rem',
                    }}
                >
                    <Application elevation={0}></Application>
                    <Application elevation={0}></Application>
                    <Application elevation={0}></Application>
                    <Application elevation={0}></Application>
                </Box>
            </CardContent>
        </AppCard>
    )
}
