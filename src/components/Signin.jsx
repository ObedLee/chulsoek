import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
// import { GoogleButton } from 'react-google-button';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn, googleSignIn, user } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  // const handleGoogleSignIn = async (e) => {
  //   e.preventDefault();
  //   setError('')
  //   try {
  //     await googleSignIn();
  //   } catch (e) {
  //     setError(e.message)
  //     console.log(e.message);
  //   }
  // };

  // useEffect(() => {
  //   if (user != null) {
  //     navigate('/account');
  //   }
  // }, [user]);

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold'>로그인 하세요</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>이메일</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>비밀번호</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
        로그인
        </button>
      </form>
      {/* <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div> */}
    </div>
  );
};

export default Signin;
