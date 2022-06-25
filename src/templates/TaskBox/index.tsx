import {
    Box,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import { Link } from 'react-router-dom'
import { TaskCard } from './style'

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
                        <ListItem>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="Trash" />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="Spam" />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="Trash" />
                        </ListItem>
                    </List>
                </Box>
            </CardContent>
        </TaskCard>
    )
}
