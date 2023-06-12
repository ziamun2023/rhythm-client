import React, { useContext } from 'react';
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseFavCart from '../../hooks/UseFavCart';
import Allusers from '../../hooks/Allusers';
const Cards = ({items}) =>{ 
    const { name, image, price, _id } = items;
    const {user,admins} = useContext(AuthContext);
    const[,refetch]=UseFavCart()
 
    const navigate = useNavigate();
    const location = useLocation();

  
    const student=user?.email
    // console.log(student)
    // console.log(admins)
    const alluser=Allusers()
    // console.log(alluser)
  
  
    const AdminAccess=admins.find(AdminUser=>AdminUser.email===user?.email)

    const handleAddToCart = item => {
        // console.log(item);
        if(user && user.email){
            const cartItem = {classId: _id, name, image, price, email: user.email , availableSeat: item.availableSeat,
                instructorEmail: item.instructorEmail,
                instructorName: item.instructorName}
            fetch('https://music-server-psi.vercel.app/postfav', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                   refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/loginacc', {state: {from: location}})
                }
              })
        }
    }
    return (
        <>
             <div className={'shadow-lg h-[600px]'}>
    <img className='w-[400px] h-[400px]' src={items.image} alt="" />
   <div className='flex ms-2 justify-around   text-2xl nav w-56 rounded-xl py-2 '>
   <p className='text-white'>{items.name}</p> <p className=' rounded-xl hover:bg-slate-100 duration-300  hover:text-black bg-black px-2'>${items.price}</p>
   </div>
  <div className='nav rounded-lg w-60 ms-2 mt-2'>
  <p className='text-black '> <b>Instructor Name:</b> {items.instructorName}</p>
  <p className='text-black '><b>Instructor Email:</b>{items.instructoremail}</p>
  </div>
   {/* <div className='    text-2xl nav w-20 rounded-xl py-2 '>
   <p className='text-white'>{items.instructoremail}</p> <p className=' rounded-xl hover:bg-slate-100 duration-300  hover:text-black bg-black px-2'>${items.instructoremail}</p>
   <p className=' rounded-xl hover:bg-slate-100 duration-300  hover:text-black bg-black px-2'> {items.  numberofStudent}</p>
  
   </div> */}
 
{
    AdminAccess?
   "": <button className="btn btn-secondary my-4" onClick={()=>handleAddToCart(items)}>add to cart</button>
}

    </div>
        </>
    );
};

export default Cards;