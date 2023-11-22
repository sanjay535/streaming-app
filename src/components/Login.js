import { useRef, useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { validateData } from '../utils/validate';
import { auth } from '../utils/firebase-config';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const ButtonSpinner = () => (
  <span className='ml-2 w-6 h-6 border-4 border-white border-b-[#00A8E1] rounded-full inline-block box-border animate-spin'></span>
);

const Login = () => {
  const [isLoggedInForm, setIsLoggedInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading]=useState(false);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleToggel = () => {
    setIsLoggedInForm(!isLoggedInForm);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('');
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    setIsLoading(true);
    if (!isLoggedInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: name.current.value,
            photoURL: 'https://avatars.githubusercontent.com/u/34466733?v=4',
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  displayName,
                  email,
                  photoURL,
                  from: 'Profile Update',
                })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorMessage + '-' + errorCode);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + '-' + errorCode);
        }).finally(()=>setIsLoading(false));
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage + ' ' + 'Error during SingIn');
        }).finally(()=>setIsLoading(false));
    }
  };
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      password.current.type = 'password';
    } else {
      password.current.type = 'text';
    }
  };

  return (
    <div className='absolute bg-white p-6 top-1/4 left-[40%] rounded-lg opacity-75'>
      <h1 className='text-3xl'>{isLoggedInForm ? 'Sign In' : 'Sign Up'}</h1>
      <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col'>
        {!isLoggedInForm && (
          <input
            ref={name}
            className='p-4 my-4 rounded-lg w-80 border border-[#00A8E1] outline-none'
            type='text'
            placeholder='Full name'
          />
        )}
        <input
          ref={email}
          className='p-4 my-4 rounded-lg w-80 border border-[#00A8E1] outline-none'
          type='text'
          placeholder='Email address'
        />
        <div className='relative'>
          <input
            ref={password}
            className='outline-none border border-[#00A8E1] p-4 my-4 rounded-lg w-80'
            type='password'
            placeholder='Password'
          />
          <span
            onClick={() => handlePasswordVisibility()}
            className={
              showPassword
                ? 'after:absolute after:top-8 after:left-72 after:content-visibility after:inline-block after:h-[100%] after:w-[100%]'
                : 'after:absolute after:top-8 after:left-72 after:content-visibility_off after:inline-block after:h-[100%] after:w-[100%]'
            }
          ></span>
        </div>

        <p className='text-red-600 text-lg font-bold w-80'>{errorMessage}</p>
        <button className='p-4 my-6 flex items-center justify-center bg-[#00A8E1] rounded-lg w-80 text-white text-2xl font-bold'>
          {isLoggedInForm ? 'Sign In' : 'Sign Up'}
          {isLoading && <ButtonSpinner/>}
        </button>
      </form>
      <p className='cursor-pointer' onClick={handleToggel}>
        {!isLoggedInForm
          ? 'Already registred? Sign In'
          : 'New to Prime Video? Signup Now'}
      </p>
    </div>
  );
};

export default Login;
