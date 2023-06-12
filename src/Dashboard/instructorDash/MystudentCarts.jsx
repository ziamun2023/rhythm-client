import React from 'react';

const MystudentCarts = ({item,index}) => {
    const {image,price,availableSeat,email,status,description,totalpurchase,name}=item
    return (
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
              <div className="font-bold">{name}</div>
             
            </div>
          </div>
        </td>
        <td>
    
          <br/>
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td></td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default MystudentCarts;