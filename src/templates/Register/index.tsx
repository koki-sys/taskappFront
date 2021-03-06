import swal from 'sweetalert'
import { Link, useNavigate } from 'react-router-dom'
import { RegistCard, RegistForm } from 'templates/Register/style'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useSetRecoilState } from 'recoil'
import { UserAtom } from 'atoms/User'
import { Api } from 'config/Api'
import { useState } from 'react'
import {
    Input, InputLabel, FormHelperText, IconButton,
    InputAdornment, Box, Button, CardContent,
    TextField, Typography
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface RegisterFormInput {
    name: string
    email: string
    password: string
}

const schema = yup.object({
    email: yup
        .string()
        .required('必須入力項目です。')
        .email('正しいメールアドレス入力してください。'),
    name: yup.string().required('必須入力項目です。'),
    password: yup
        .string()
        .required('必須入力項目です。')
        .min(8, 'パスワードは8文字以上入力してください。')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
            '半角英数字と記号を入力してください。',
        ),
})

export const Register = () => {
    const navigate = useNavigate()
    const userSet = useSetRecoilState(UserAtom)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormInput>({
        resolver: yupResolver(schema),
    })

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!(showPassword))
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onSubmit: SubmitHandler<RegisterFormInput> = (inputData) => {
        // バリデーションチェックOK！なときに行う処理を追加

        const formData = {
            name: inputData.name,
            email: inputData.email,
            password: inputData.password,
        }

        Api.get('/sanctum/csrf-cookie', { withCredentials: true })
            .then(() => {
                Api.post('/api/register', formData, { withCredentials: true }).then((res) => {
                    if (res.data.status === 200) {
                        localStorage.setItem('auth_token', res.data.token)
                        userSet(res.data.username)
                        swal(
                            'ようこそ！',
                            'ログインに成功しました。',
                            'success',
                        )
                        navigate('/')
                    } else {
                        // 例外処理
                    }
                })
            })
    }

    return (
        <RegistCard>
            <CardContent>
                <Typography variant="subtitle1">TaskAppに登録</Typography>
                <form>
                    <RegistForm variant="standard">
                        <TextField
                            variant="standard"
                            type="text"
                            label="ユーザ名"
                            {...register('name')}
                            error={'name' in errors}
                            helperText={errors.name?.message}
                        />
                    </RegistForm>
                    <RegistForm variant="standard">
                        <TextField
                            variant="standard"
                            type="text"
                            label="メールアドレス"
                            {...register('email')}
                            error={'email' in errors}
                            helperText={errors.email?.message}
                        />
                    </RegistForm>
                    <RegistForm variant="standard">
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
                    </RegistForm>
                    <Typography variant="subtitle1" sx={{ margin: '1.2rem' }}>
                        <Link to="/login">ログインはこちら</Link>
                    </Typography>
                    <Box>
                        <Button
                            type="submit"
                            onClick={handleSubmit(onSubmit)}
                            variant="contained"
                        >
                            新規登録
                        </Button>
                    </Box>
                </form>
            </CardContent >
        </RegistCard >
    )
}
