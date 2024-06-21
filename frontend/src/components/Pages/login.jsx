import React from 'react';
import logo from '../images/easySplit_logo.png';
import { Link } from 'react-router-dom';
import image from '../images/money.jpeg'

const Login = () => {
  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center'>
        <div className='w-[500px] h-[400px] mt-[-8%]'>
            <img src={image} alt='login'/>
        </div>
        <div className='text-white'>
          <form className='bg-[#1c1c1e] p-8 rounded-lg shadow-lg w-[400px] h-[500px] mt-[%]'>
            <div className='flex items-center gap-[8%] mt-[-5%] mb-5'>
              <img src={logo} className='w-[150px] mb-6' alt='EasySplit Logo' />
              <h1 className='text-white text-2xl font-bold mb-6 ml-[-17%]'>Sign In</h1>
            </div>
            <div className='mb-4 mt-[-10%]'>
              <label className='block text-white text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                placeholder='Email'
              />
            </div>
            <div className='mb-6'>
              <label className='block text-white text-sm font-bold mb-2' htmlFor='password'>
                Password
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='Password'
              />
            </div>
            <div className='flex items-center justify-between'>
              <Link to='/dashboard'>
                <button
                  className='bg-black hover:bg-[#333] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='button'
                >
                  Sign In
                </button>
              </Link>
            </div>
          </form>
          <div className='mt-6 ml-[5%]'>
            <p className='text-white'>
              Don't have an account? <Link to='/signup' className='text-blue-500'>Register</Link>
            </p>
          </div>
        </div>
      </div>

  );
};

export default Login;
