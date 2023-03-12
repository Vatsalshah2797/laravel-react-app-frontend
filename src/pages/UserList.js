import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import http from '../http';

export default function UserList() {
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get('/users').then(response=>{
            console.log(response);
            setUsers(response.data);
        })
    } 

    const deleteUser = (id) => {
        http.delete('/users/'+id).then(response=>{
            console.log(response);
            fetchAllUsers();
        })
    } 

    return(
        <div>
            <h2>Users Listing...</h2>
            <table className="table table-bordered mt-4">
                <thead>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {users.map((user, index)=>(
                        <tr key={user.id}>
                            <td> {++index } </td>
                            <td> {user.name} </td>
                            <td> {user.email} </td>
                            <td> 
                                <Link className="btn btn-warning ml-10" to={{ pathname: "/edit/"+user.id }}>Edit</Link>
                                <Link className="btn btn-info ml-10" to={{ pathname: "/view/"+user.id }}>View</Link>
                                <button type="button" className="btn btn-danger mr-4" onClick={()=>deleteUser(user.id)}> Delete </button>
                            </td>
                        </tr>
                    ))}
                    
                    
                </tbody>
            </table>
        </div>
    )
}