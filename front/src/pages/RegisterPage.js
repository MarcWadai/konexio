import React from 'react';
import '../style/pages/loginPage.scss'
import { useForm } from 'react-hook-form';
import InputContainer from '../components/inputContainer'
import CheckboxContainer from '../components/checkboxContainer'


function RegisterPage() {

    const { register, errors, handleSubmit, watch } = useForm();

    const onSubmit = (data) => {
        console.log('data submit', data)
    }

    return (
        <main>
            <div className='container'>
                <h2 className="text-center">Connexion</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <InputContainer error={errors['firstname']} title='Firstname'>
                            <input
                                type="text"
                                name="firstname"
                                ref={register({ required: true })}
                                placeholder="Firstname" />
                        </InputContainer>
                        <InputContainer error={errors['lastname']} title='Lastname'>
                            <input
                                type="text"
                                name="lastname"
                                ref={register()}
                                placeholder="Lastname" />
                        </InputContainer>
                    </div>
                    <div className="row">
                        <InputContainer error={errors['email']} title='Email'>
                            <input
                                type="email"
                                name="email"
                                ref={register({ required: true })}
                                placeholder="Email" />
                        </InputContainer>
                        <InputContainer error={errors['password']} title='Password'>
                            <input
                                type="password"
                                name="password"
                                ref={register({
                                    required: "You must specify a password",
                                    minLength: {
                                        value: 8,
                                        message: "Password must have at least 8 characters"
                                    }
                                })}
                                placeholder="Password" />
                        </InputContainer>
                        <InputContainer error={errors['password_repeat']} title='Password confirmation'>
                            <input
                                type="password"
                                name="password_repeat"
                                ref={register({required: true, validate: v => v === watch('password') || "The password does'n match" })}
                                placeholder="Password" />
                        </InputContainer>
                    </div>
                    <div className="row">
                        <InputContainer error={errors['password']} title='Password confirmation'>
                            <select
                                name="status"
                                ref={register({ required: true })}>
                                <option value="">--Please choose an option--</option>
                                <option value="TEACHER">Teacher</option>
                                <option value="TEACHER_ASSISTANT">Teacher assistant</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </InputContainer>
                    </div>
                    <div className="row">
                        <CheckboxContainer error={errors['newsletter']} title='Subscribe to newsletter'>
                            <input type="checkbox" name="newsletter" ref={register()} />
                        </CheckboxContainer>
                    </div>
                    <div className="row">
                        <CheckboxContainer error={errors['agreecondition']} title='I have read terms and condition'>
                            <input type="checkbox" name="agreecondition" ref={register({ required: true })} />
                        </CheckboxContainer>

                    </div>
                    <button type="submit" className="btn btn-blue btn-lg mb2">
                        Register
                    </button>
                </form>
            </div>
        </main>
    );
}

export default RegisterPage;