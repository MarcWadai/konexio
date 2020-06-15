import React from 'react';
import '../style/pages/loginPage.scss'
import { useForm } from 'react-hook-form';
import InputContainer from '../components/inputContainer'


function LoginPage() {

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log('data submit', data)
    }

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    return (
        <main>
            <div className='authModule'>
                <h2 className="text-center">Connexion</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer error={errors['email']} title='Email'>
                        <input
                        type="email"
                        name="email"
                        ref={register({ required: true})}
                        placeholder="Email"/>
                    </InputContainer>
                    <InputContainer error={errors['password']} title='Password'>
                        <input
                        type="password"
                        name="password"
                        ref={register({ required: true})}
                        placeholder="Password"/>
                    </InputContainer>
        <button type="submit" className="btn btn-blue btn-lg mb2">
            Login
        </button>
      </form>
    </div>
  </main>
  );
}

export default LoginPage;



// import React, { useEffect, useState } from 'react';
// import '../style/pages/loginPage.scss'
// import { useForm, Controller } from 'react-hook-form';
// import SimpleInput from '../components/simpleInput'


// function LoginPage() {

//     const { errors, register, handleSubmit, setValue } = useForm();
//     const [email, setEmail] = useState("");
//     const onSubmit = (data) => {
//         console.log('data submit', data)
//     }

//     useEffect(() => {
//         register({ name: "email" }, { required: true });
//         register({ name: "password" }, { required: true });
//     }, [])
//     return (
//         <main>
//             <div className='authModule'>
//                 <h2 className="text-center">Connexion</h2>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <SimpleInput
//                         type="email"
//                         title="Email"
//                         placeholder="Email"
//                         name="email"
//                         value={email}
//                         errors={errors}
//                         newChange={event => {
//                             event.persist();
//                             event.preventDefault();
//                             setEmail(event.target.value)
//                             console.log('val', event)
//                             setValue(event.target.value)
//                         }}
//                     />
//                     <SimpleInput
//                         type="password"
//                         title="Password"
//                         placeholder="password"
//                         name="password"
//                         errors={errors}
//                         newChange={event => {
//                             event.persist();
//                             event.preventDefault();
//                             console.log('val', event)
//                             setValue(event.target.value)
//                         }}
//                     />
//                     <div>
//                         errors: {JSON.stringify(errors, null)}
//                     </div>
//                     <button type="submit" className="btn btn-blue btn-lg mb2">
//                         Login
//         </button>
//                 </form>
//             </div>
//         </main>
//     );
// }

// export default LoginPage;

// import React, { useEffect } from 'react';
// import '../style/pages/loginPage.scss'
// import { useForm, Controller } from 'react-hook-form';
// import SimpleInput from '../components/simpleInput'


// function LoginPage() {

//     const { control, handleSubmit } = useForm();
//     const onSubmit = (data) => {
//         console.log('data submit', data)
//     }

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     return (
//         <main>
//             <div className='authModule'>
//                 <h2 className="text-center">Connexion</h2>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <Controller as={SimpleInput}
//                         defaultValue=""
//                         type="email"
//                         title="Email"
//                         placeholder="Email"
//                         name="email"
//                         rules={{ required: true }}
//                         value={email}
//                         control={control}
//                     />
//                     <Controller as={SimpleInput}
//                         defaultValue=""
//                          type="password"
//                          title="Password"
//                          placeholder="Password"
//                          name="password"
//                          control={control}
//                     />
//         <button type="submit" className="btn btn-blue btn-lg mb2">
//             Login
//         </button>
//       </form>
//     </div>
//   </main>
//   );
// }

// export default LoginPage;
