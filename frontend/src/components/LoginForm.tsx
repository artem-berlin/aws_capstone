import {FormEvent, useState} from "react";
import {registerNewUser} from "../service/apiService";
import {useAuth} from "../auth/AuthProvider";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, SubmitHandler, Controller, useFormState } from "react-hook-form";
import { loginValidation, passwordValidation } from './validation';
import './LoginForm.css';

interface ISignInForm {
    loginEmail: string;
    password: string;
}

export default function LoginForm(){
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPasswordOne, setRegisterPasswordOne] = useState('')
    const [registerPasswordTwo, setRegisterPasswordTwo] = useState('')
    const [error, setError] = useState('')

    const { handleSubmit, control } = useForm<ISignInForm>();
    const { errors } = useFormState({control})
    const auth = useAuth()

    const onSubmit: SubmitHandler<ISignInForm> = data => console.log(data);
    const Login = (event : FormEvent) => {
        event.preventDefault()
        setError('')
        auth.login(loginEmail, loginPassword)

            .catch(er => setError(er.message))
    }

   /* const Register = (event : FormEvent) => {
        event.preventDefault()
        setError('')
        if (!(registerPasswordOne===registerPasswordTwo)){
            setError('Pass is not equal')
        } else {
            registerNewUser({email: registerEmail, password: registerPasswordOne, passwordAgain: registerPasswordTwo})
                .catch(er => setError(er.message))
        }
    }*/

    return (
        <div className="auth-form">
            <Typography variant="h4" component="div">
                Log in
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" className="auth-form__subtitle">
                To get full access
            </Typography>

            <form className="auth-form__form" onSubmit={Login}>     {/*//!!!!!!!*/}
                <Controller
                    control={control}
                    name="loginEmail"
                    rules={loginValidation}

                    render={({field}) => (
                        <TextField
                            label="email"
                            onChange={(ev) => setLoginEmail(ev.target.value)}
                            value={field.value}
                            fullWidth={true}
                            size="small"
                            margin="normal"
                            className="auth-form__input"
                            error={!!errors.loginEmail?.message}
                            helperText={errors?.loginEmail?.message}
                        />

                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    rules={passwordValidation}
                    render={({ field }) => (
                        <TextField
                            label="password"
                            onChange={(ev) => setLoginPassword(ev.target.value)}
                            value={field.value}
                            fullWidth={ true }
                            size="small"
                            margin="normal"
                            type="password"
                            className="auth-form__input"
                            error={ !!errors?.password?.message }
                            helperText={ errors?.password?.message }
                        />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth={ true }
                    disableElevation={ true }
                    sx={{
                        marginTop: 2
                    }}
                >
                    Log in

                </Button>
                <div>{error} </div>
            </form>
            <div className="auth-form__footer">
                <Typography variant="subtitle1" component="span">
                    Any account?{" "}
                </Typography>
                <Typography variant="subtitle1" component="span" sx={{ color: 'blue'}}>
                    Please sigh up
                </Typography>
            </div>


        </div>
    )
}