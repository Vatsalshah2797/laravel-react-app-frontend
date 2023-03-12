import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import http from '../http';

export default function UserView(props) {
    
    const [inputs,setInputs] = useState([]);

    const {id} = useParams();
    
    useEffect(()=>{
        fetchUser(id);
    }, []);

    const fetchUser = () => {
        http.get('/users/'+id+'/edit').then(response=>{
            console.log(response);
            setInputs({
                name:response.data.name,
                email:response.data.email,
                password:response.data.password,
            })
        })
    } 

    return(
        <div>
            <h2>View User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4" >
                        <h4>Name</h4>
                        <p>{ inputs.name }</p>
                        <h4>Email</h4>
                        <p>{ inputs.email }</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}