import React from 'react';
import { Link } from 'react-router-dom';

const FriendsList = () => {

  const groups = [
    {
      name: 'Rahul',
      email: 'iam@gmail.com',
      uoiid: 'rahul@sbi',
    },
    {
      name: 'manu',
      email: 'iam@gmail.com',
      upiid: 'rahul@sbi',
    },
    {
      name: 'Anandu',
      email: 'iam@gmail.com',
      upiid: 'rahul@sbi',
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-black">
      <h1 className="text-5xl text-black text-center font-bold mt-[5%] mb-[8%]">Friend List</h1>
      <table className="w-[1300px] ml-[-25%] bg-white border rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-2 text-left"> Name</th>
            <th className="py-2 px-4 border-2 text-left">Upi Id</th>
            <th className="py-2 px-4 border-2 text-left">Email ID</th>
            <th className="py-2 px-4 border-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((friend, index) => (
            <tr key={index}>
              <Link to='/dashboard/friendprofile' className=''>
                <td className="py-2 px-4 border-2">{friend.name}</td> 
              </Link>
              <td className="py-2 px-4 border-2">{friend.upiid}</td>
              <td className="py-2 px-4 border-2">{friend.email}</td>
              <td className="py-2 px-4 border-2">
                <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                  Update
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FriendsList;



