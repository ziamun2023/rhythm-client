

import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";

const isAdmin = () => {
    const {user, loading} = useContext(AuthContext);
 
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/studentProfile/admin/${user?.email}`);
            const result=await res.json()
            // return res.data.admin;
            return result.admin
        }
    })
    return [isAdmin, isAdminLoading]
}
export default isAdmin;