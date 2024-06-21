import React from 'react';

const AddFriend = () => {

  return (
    <div className='flex gap-[5%]'>
        <div className="w-[800px] h-[700px] mx-auto p-8 mt-5 border rounded-lg shadow-lg bg-gray-900 text-white">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold">Add Friends</h1>
      </header>
      <div className="mb-6  gap-[5%] items-center">
        <label htmlFor="name-input" className="block mb-4 text-2xl font-medium">Name :</label>
        <input
          type="text"
          id="name-input"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your friend's name"
        />
      </div>

      <div className="mb-6  gap-[5%] items-center">
        <label htmlFor="email-input" className="block mb-4 text-2xl font-medium ">Email</label>
        <input
          type="email"
          id="email-input"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your friend's email"
        />
      </div>

      <div className="mb-6 mt-7 gap-[5%] items-center">
        <label htmlFor="upi-input" className="block mb-4 mr-6 text-2xl font-medium">UPI</label>
        <input
          type="text"
          id="upi-input"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your friend's UPI ID"
        />
      </div>

      <div className="flex justify-center gap-[5%] mt-[15%]">
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
          Add
        </button>
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
          Cancel
        </button>
      </div>
    </div>
    </div>
  );
};

export default AddFriend;
