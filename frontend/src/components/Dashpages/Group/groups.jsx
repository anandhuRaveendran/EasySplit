import React from 'react';

const GroupList = () => {

  const groups = [
    {
      groupName: 'Group 1',
      groupDescription: 'This is Group 1',
      members: ['manu', 'sujin', 'midhun'],
      currency: 'INR'
    },
    {
      groupName: 'Group 2',
      groupDescription: 'This is Group 2',
      members: ['dideesh', 'ajay', 'vishnu'],
      currency: 'USD'
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-black">
      <h1 className="text-5xl text-black text-center font-bold mb-[10%] mt-[5%]">Group List</h1>
      <table className="w-[1400px] ml-[-30%] bg-white border rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Group Name</th>
            <th className="py-2 px-4 border-b text-left">Description</th>
            <th className="py-2 px-4 border-b text-left">Members</th>
            <th className="py-2 px-4 border-b text-left">Currency</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{group.groupName}</td>
              <td className="py-2 px-4 border-b">{group.groupDescription}</td>
              <td className="py-2 px-4 border-b">
                {group.members.join(', ')}
              </td>
              <td className="py-2 px-4 border-b">{group.currency}</td>
              <td className="py-2 px-4 border-b">
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

export default GroupList;
