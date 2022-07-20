import swal from 'sweetalert'
import { Link, useNavigate } from 'react-router-dom'
import { Api } from 'config/Api'
import { LoginCard, LoginForm } from 'templates/Login/style'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useSetRecoilState } from 'recoil'
import { UserAtom } from 'atoms/User'
import {
    Input, InputLabel, FormHelperText, IconButton,
    InputAdornment, Box, Button, CardContent,
    TextField, Typography
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react'

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
    const userSet = useSetRecoilState(UserAtom)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInput>({
        resolver: yupResolver(schema),
    })

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!(showPassword))
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onSubmit: SubmitHandler<LoginFormInput> = (inputData) => {
        // バリデーションチェックOK！なときに行う処理を追加

        const formData = {
            email: inputData.email,
            password: inputData.password,
        }

        Api.get('/sanctum/csrf-cookie').then(() => {
            Api.post(`api/login`, formData).then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token)
                    userSet(res.data.name)
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
                        <InputLabel htmlFor="standard-adornment-password">パスワード</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            {...register('password')}
                            error={'password' in errors}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText id="component-error-text">{errors.password?.message}</FormHelperText>
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
