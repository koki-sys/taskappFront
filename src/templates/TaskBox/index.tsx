import {
    Box,
    CardContent,
    Typography,
    List
} from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import { Link } from 'react-router-dom'
import { TaskCard } from './style'
import { TaskDigest } from 'templates/TaskDigest'

export const TaskBox = () => {


    return (
        <TaskCard>
            <CardContent>
                <Box>
                    <Typography variant="inherit" align="left">
                        タスク
                    </Typography>
                    <Link
                        to="/task"
                        style={{
                            float: 'right',
                            color: '#263238',
                        }}
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
                    <List component="nav">
                        <TaskDigest />
                    </List>
                </Box>
            </CardContent>
        </TaskCard>
    )
}
