import React from 'react';

const InstructorClassCards = ({singleclass}) => {

    const {image,price,availableSeat,status,description,totalpurchase,name}=singleclass
    return (
        <tr>
        <th>
        {/* {index+1} */}
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
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{availableSeat}</td>
        <td>{price}</td>
        <td>{totalpurchase}</td>
        <td>{status}</td>
        <td>{description}</td> 
        {/* feed back */}
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default InstructorClassCards;