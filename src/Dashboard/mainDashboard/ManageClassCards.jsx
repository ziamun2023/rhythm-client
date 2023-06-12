import React from 'react';

const ManageClassCards = ({items,index}) => {
    const {image,price,availableSeat,email,status,description,totalpurchase,name,instructorEmail,instructorName}=items

    return (
    <>
        <tr>
        <th>
        {index+1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold"></div>
              <div className="text-sm opacity-50"></div>
            </div>
          </div>
        </td>
        <td>
        {instructorName}
          <br/>
          <span className="badge badge-ghost badge-sm">{instructorEmail}</span>
        </td>
        <td>{availableSeat}</td>
        <td>{status}</td>
        <th>
          <button className="btn btn-ghost btn-xs bg-green-500  text-black mx-2">Approve</button>
          <button className="btn btn-ghost btn-xs text-black bg-red-500">Deny</button>
         
        
        </th>
        <th>
        <button className="btn btn-ghost btn-xs text-black bg-yellow-500">feedback</button>
         
        
        </th>
      </tr></>
    );
};

export default ManageClassCards;