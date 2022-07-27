import {
    ListItem,
    ListItemText,
    Divider
} from '@mui/material'
import { ErrorAtom } from "atoms/Error"
import { UserAtom } from "atoms/User"
import { Api } from "config/Api"
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from "recoil"
import { BoxLoad } from 'templates/BoxLoad'

type TaskType = {
    id: number,
    created_at: string | null,
    updated_at: string | null,
    task_id: number,
    user_id: number,
    team_id: number,
    task_name: string,
    flg: number,
    deadline: string,
    team_name: string,
    user_name: string,
    errors: string | null
}

export const TaskDigest = () => {
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
                    message: "何も入ってないよ"
                })
            } else {
                setError({
                    status: res.data.status,
                    message: "通信失敗"
                })
            }
        })
    }, [])

    const items = tasks.map((task: TaskType) => {
        return (
            <>
                <ListItem key={task.id}>
                    <ListItemText primary={task.task_name} />
                </ListItem>
                <Divider />
            </>
        )
    })

    return (
        <>
            {isLoad == false && <BoxLoad />}
            {tasks != undefined && items}
            {error != undefined && error.message}
        </>
    )
}

