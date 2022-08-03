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
import { ErrorAtom } from 'atoms/Error'
import { UserAtom } from 'atoms/User'
import { Api } from 'config/Api'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { BoxLoad } from 'templates/BoxLoad'

type TaskType = {
    id: number
    created_at: string | null
    updated_at: string | null
    task_id: number
    user_id: number
    team_id: number
    task_name: string
    flg: number
    deadline: string
    team_name: string
    user_name: string
    errors: string | null
}

export const TaskBox = () => {
    const user = useRecoilValue(UserAtom)
    const [tasks, setTasks] = useState([])
    const [isLoad, setIsLoad] = useState(false)
    const [error, setError] = useRecoilState(ErrorAtom)

    useEffect(() => {
        Api.get(`/api/task/doing?id=${user.id}`).then((res) => {
            if (res.data.status === 200) {
                setTasks(res.data.items)
                setIsLoad(true)
            } else if (res.data.length === 0) {
                console.log(`空白エラー${error}`)
                setError({
                    status: res.data.status,
                    message: '何も入ってないよ',
                })
                setIsLoad(true)
            } else {
                setError({
                    status: res.data.status,
                    message: '通信失敗',
                })
                setIsLoad(true)
            }
        })
    }, [])

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
                        {isLoad == false && <BoxLoad />}
                        {tasks != undefined &&
                            tasks.map((task: TaskType) => (
                                <div key={task.id}>
                                    <ListItem>
                                        <ListItemText
                                            primary={task.task_name}
                                        />
                                    </ListItem>
                                    <Divider />
                                </div>
                            ))}
                        {error != undefined && error.message}
                    </List>
                </Box>
            </CardContent>
        </TaskCard>
    )
}
