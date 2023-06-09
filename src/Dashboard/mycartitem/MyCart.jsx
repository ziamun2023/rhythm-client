import Swal from "sweetalert2";
import UseFavCart from "../../hooks/UseFavCart";


const MyCart = () => {
    const [cart,refetch]=UseFavCart()
    
    const  totalPrice=cart.reduce((sum,item)=>item.price+sum,0 )
    const handleDeleteCart=cartitem=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/carts/${cartitem._id}`,{
                method:"DELETE"
             })
             .then(res=>res.json())
             .then(data=>{
                if(data.deletedCount>0){
                    refetch()
                    Swal.fire(
                        "Deleted!",
                        'Your Cart Item has been deleted',
                        'success'
                    )
                }
             })
            }
          })
    }
    return (
        <div className="w-full text-2xl">
    <div>
    <h3>Total item : {cart?.length}</h3>
          <h3>Total price :$ {totalPrice}</h3>

    </div>
<div>
<div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>Class Name</th>
        <th>Instructor</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {

cart.map((cartitem,index)=> <tr key={cartitem._id}>
    <th>
   {index+1}
    </th>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={cartitem.image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{cartitem.name}</div>
          <div className="text-sm opacity-50">United States</div>
        </div>
      </div>
    </td>
    <td>
      Zemlak, Daniel and Leannon
      <br/>
      <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
    </td>
    <td>{cartitem.price}</td>
    <th>

      <button onClick={()=>handleDeleteCart(cartitem)} className="btn btn-ghost btn-xs">Delete</button>
    </th>
  </tr>)
}
     
      {/* row 2 */}
    
    </tbody>
    {/* foot */}
 
    
  </table>
</div>
</div>
       
        </div>
    );
};

export default MyCart;