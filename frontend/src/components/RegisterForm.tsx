import {FormEvent, useState} from "react";
import {registerNewUser} from "../service/apiService";
//import {useAuth} from "../auth/AuthProvider";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {passwordValidation} from "./validation";
import { useForm, Controller, useFormState } from "react-hook-form";
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
    const { control } = useForm<ISignUpForm>();
    const { errors } = useFormState({control})
    //const auth = useAuth()



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
