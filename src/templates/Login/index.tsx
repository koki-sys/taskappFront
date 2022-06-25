import swal from 'sweetalert'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CardContent, Button, Box, Typography, TextField } from '@mui/material'
import { LoginCard, LoginForm } from '@/templates/Login/style'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

interface LoginFormInput {
    email: string
    password: string
}

const schema = yup.object({
    email: yup
        .string()
        .required('必須入力項目です。')
        .email('正しいメールアドレスを入力してください。'),
    password: yup
        .string()
        .required('必須入力項目です。')
        .min(8, 'パスワードは8文字以上入力してください。')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
            '半角英数字と記号を入力してください。',
        ),
})

export const Login = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInput>({
        resolver: yupResolver(schema),
    })

    const onSubmit: SubmitHandler<LoginFormInput> = (inputData) => {
        // バリデーションチェックOK！なときに行う処理を追加

        const formData = {
            email: inputData.email,
            password: inputData.password,
        }

        axios.get('/sanctum/csrf-cookie').then(() => {
            axios.post(`api/login`, formData).then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token)
                    localStorage.setItem('auth_name', res.data.username)
                    swal('ログイン成功', res.data.message, 'success')
                    navigate('/')
                    // eslint-disable-next-line no-restricted-globals
                    location.reload()
                } else if (res.data.status === 401) {
                    swal('注意', res.data.message, 'warning')
                } else {
                }
            })
        })
    }

    return (
        <LoginCard>
            <CardContent>
                <Typography variant="subtitle1">TaskAppにログイン</Typography>
                <form>
                    <LoginForm variant="standard">
                        <TextField
                            variant="standard"
                            type="email"
                            label="メールアドレス"
                            {...register('email')}
                            error={'email' in errors}
                            helperText={errors.email?.message}
                        />
                    </LoginForm>
                    <LoginForm variant="standard">
                        <TextField
                            variant="standard"
                            type="password"
                            label="パスワード"
                            {...register('password')}
                            error={'password' in errors}
                            helperText={errors.password?.message}
                        />
                    </LoginForm>
                    <Typography variant="subtitle1" sx={{ margin: '1.2rem' }}>
                        <Link to="/register">新規登録の方はこちら</Link>
                    </Typography>
                    <Box>
                        <Button
                            type="submit"
                            variant="contained"
                            onClick={handleSubmit(onSubmit)}
                        >
                            ログイン
                        </Button>
                    </Box>
                </form>
            </CardContent>
        </LoginCard>
    )
}
