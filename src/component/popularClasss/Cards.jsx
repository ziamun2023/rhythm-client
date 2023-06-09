import React, { useContext } from 'react';
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseFavCart from '../../hooks/UseFavCart';
const Cards = ({items}) =>{ 
    const { name, image, price, _id } = items;
    const {user} = useContext(AuthContext);
    const[,refetch]=UseFavCart()
 
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
        console.log(item);
        if(user && user.email){
            const cartItem = {classId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/postToy', {
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
             <div>
    <img src={items.image} alt="" />
 

 <button className="btn btn-secondary my-4" onClick={()=>handleAddToCart(items)}>add to cart</button>
    </div>
        </>
    );
};

export default Cards;