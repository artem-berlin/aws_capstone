import {FormEvent, useState} from "react";
import {registerNewUser} from "../service/apiService";
import {useAuth} from "../auth/AuthProvider";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {loginValidation, passwordValidation} from "./validation";
import { useForm, SubmitHandler, Controller, useFormState } from "react-hook-form";
import './RegisterForm.css';


interface ISignUpForm {
    registerEmail: string;
    registerPasswordOne: string;
    registerPasswordTwo: string;
}
export default function RegisterForm(){

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPasswordOne, setRegisterPasswordOne] = useState('')
    const [registerPasswordTwo, setRegisterPasswordTwo] = useState('')
    const [error, setError] = useState('')
    const { handleSubmit, control } = useForm<ISignUpForm>();
    const { errors } = useFormState({control})
    const auth = useAuth()



    const Register = (event : FormEvent) => {
        event.preventDefault()
        setError('')
        if (!(registerPasswordOne===registerPasswordTwo)){
            setError('Pass is not equal')
        } else {
            registerNewUser({email: registerEmail, password: registerPasswordOne, passwordAgain: registerPasswordTwo})
                .catch(er => setError(er.message))
        }
    }

    return (
        <div className={'reg-form'}>
            <Typography variant="h4" component="div">
                Register
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" className="reg-form__subtitle">
                put your credentials here
            </Typography>
            <form className="reg-form__form" onSubmit={Register}>     {/*//!!!!!!!*/}
                <Controller
                    control={control}
                    name="registerEmail"
                    rules={passwordValidation}

                    render={({field}) => (
                        <TextField
                            label="email"
                            onChange={(ev) => setRegisterEmail(ev.target.value)}
                            value={field.value}
                            fullWidth={true}
                            size="small"
                            margin="normal"
                            className="reg-form__input"
                            error={!!errors.registerEmail?.message}
                            helperText={errors?.registerEmail?.message}
                        />

                    )}
                />

                <Controller
                    control={control}
                    name="registerPasswordOne"
                    rules={passwordValidation}
                    render={({ field }) => (
                        <TextField
                            label="password"
                            onChange={(ev) => setRegisterPasswordOne(ev.target.value)}
                            value={field.value}
                            fullWidth={ true }
                            size="small"
                            margin="normal"
                            type="password"
                            className="reg-form__input"
                            error={ !!errors?.registerPasswordOne?.message }
                            helperText={ errors?.registerPasswordOne?.message }
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="registerPasswordTwo"
                    rules={passwordValidation}
                    render={({ field }) => (
                        <TextField
                            label="password"
                            onChange={(ev) => setRegisterPasswordTwo(ev.target.value)}
                            value={field.value}
                            fullWidth={ true }
                            size="small"
                            margin="normal"
                            type="password"
                            className="reg-form__input"
                            error={ !!errors?.registerPasswordTwo?.message }
                            helperText={ errors?.registerPasswordTwo?.message }
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
                    Sigh up

                </Button>
                <div>{error} </div>
            </form>
            <div className="reg-form__footer">
                <Typography variant="subtitle1" component="span">
                    After creating account
                </Typography>
                <Typography variant="subtitle1" component="span" sx={{ color: 'blue'}}>
                    Please log in
                </Typography>
            </div>

        </div>
    )
}

{/*    <h2>Register</h2>
           <form onSubmit={Register}>
                <input type="text" placeholder={'Email'} value={registerEmail} onChange={ev => setRegisterEmail(ev.target.value)}/>
                <input type='password' placeholder={'Password'} value={registerPasswordOne} onChange={ev => setRegisterPasswordOne(ev.target.value)}/>
                <input type='password' placeholder={'Passwort repeat'} value={registerPasswordTwo} onChange={ev => setRegisterPasswordTwo(ev.target.value)}/>
                <button type={'submit'}>Register</button>
            </form>
            {error && <h2>{error}</h2>}*/}