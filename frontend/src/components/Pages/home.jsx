import React from 'react';
import SwitchText from '../Styling/SwitchText';
import logo from '../images/easySplit_logo.png';
import { Link } from 'react-router-dom';
import heroImage from '../images/frontpage.png'
import hou from '../images/home.png'
import events from '../images/events.png'
import trip from '../images/trip.png'
import friends from '../images/friensd.png'

const Home = () => {
  return (
    <div className='w-screen h-screen bg-gray-900'>
      <nav className='flex items-center text-white justify-between mr-[3%]'>
        <div className='flex items-center'>
          <img src={logo} className='w-[200px]' alt='EasySplit Logo' />
          <h1 className='font-bold text-3xl ml-[-18%]'>EasySplit</h1>
        </div>
        <div className='flex gap-4 items-center'>
          <Link to='/login'>
            <h1 className='text-xl cursor-pointer hover:text-gray-500'>Log In</h1>
          </Link>
          <Link to='/signup'>
            <button className='w-[100px] h-10 border rounded-md bg-[#1c1c1e] hover:bg-[#333] text-xl'>
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      <div className='flex justify-between ml-[5%]'>
        <div className='flex flex-col p-8'>
          <div className='mt-10'>
            <h1 className='text-white text-6xl font-bold mb-2'>Less stress when</h1>
            <h1 className='text-white text-6xl font-bold mb-2'>sharing expenses</h1>
            <h1 className='text-white text-5xl font-bold mb-4'>
              <SwitchText/>
            </h1>
          </div>
          <div className='text-white flex gap-10 mt-10'>
              <img src={hou} className='w-30 h-20' alt='Icon 1' />
              <img src={friends} className='w-30 h-20' alt='Icon 2' />
              <img src={events} className='w-30 h-20' alt='Icon 3'/>
              <img src={trip} className='w-30 h-20' alt='Icon 4' />
          </div>
          <div className='text-white mt-[100px] text-3xl'>
            <h1>Keep track of your shared expenses and</h1>
            <h1>balances with housemates, trips, groups, </h1>
            <h1>friends, and family.</h1>
          </div>
          <button className='mt-8 w-[200px] h-[60px] border rounded-lg bg-black text-white font-bold hover:bg-[#333]'>
            Sign Up
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <img src={heroImage} className='w-[700px] mt-[-15%] mr-[55%] h-auto' alt='Hero' />
        </div>
      </div>
    </div>
  );
};

export default Home;
