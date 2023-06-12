export const saveUser = user=>{
    const currentUser={
        email:user.email,
    }
    fetch(`https://music-server-psi.vercel.app/acounts/${user?.email}`,{
        method :'PUT',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify(currentUser),
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

}