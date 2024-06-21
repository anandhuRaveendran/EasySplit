// import React, { useState, useEffect } from 'react';


const AddGroup = () => {

  return (
    <div className='flex'>
    <div className="w-[900px] h-[700px] ml-[20%] p-4 border rounded-lg shadow-lg text-black">
      <header className="text-center">
        <h1 className="text-5xl text-black font-bold mb-[10%]">Add New Group</h1>
      </header>
      <div className="mb-4">
        <label className="block text-xl font-medium mb-4 text-black">Group Name</label>
        <input
          type="text"
          placeholder="Enter Group Name"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-xl font-medium mb-4 text-black">Group Description (optional)</label>
        <input
          type="text"
          placeholder="Enter Group Description"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4 mt-8">
        <div className="flex mb-2 gap-[3%]">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
        <select id="countries" class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Friends</option>
          <option value="manu">Manu</option>
          <option value="Sujin">Sujin</option>
          <option value="Anandu">Anandu</option>
          <option value="Midhun">Midhun</option>
        </select>
          <button className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded w-[200px]">Add Member</button>
        </div>
        <ul>
            <li className="flex justify-between items-center mb-2">
              
              <button className="text-red-500">x</button>
            </li>
        </ul>
      </div>
      <div className="mb-4 mt-5">
        <label className="block text-l font-medium mb-4 text-white ">Currency</label>
        <select
          className="w-full p-2 border rounded"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>

        </select>
      </div>
      <div className="flex justify-between mx-7 mt-[5%] mb-[5%]">
        <button className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded mr-2">Save Group</button>
        <button className="p-2 bg-gray-300 hover:bg-gray-400 text-black rounded" >Cancel</button>
      </div>
    </div>

    </div>
  );
};

export default AddGroup;
