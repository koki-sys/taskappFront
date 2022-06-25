import {
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import { Link } from 'react-router-dom'
import { OpinionCard } from '@/templates/OpinionBox/style'

export const OpinionBox = () => {
    return (
        <OpinionCard>
            <CardContent>
                <Typography variant="inherit" align="left">
                    意見ボックス
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
            </CardContent>
        </OpinionCard>
    )
}
