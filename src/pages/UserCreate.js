import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../http';

export default function UserCreate() {
    const [inputs,setInputs] = useState([]);
    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    const navigate = useNavigate();

    const submitForm = () => {
        console.log(inputs);
        http.post('/users', inputs).then(response=>{
            console.log(response);
            navigate('/');
        })
    }

    return(
        <div>
            <h2>New User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4" >
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name..." className="form-control mb-2" value={inputs.name || ''} onChange={handleInputChange} />
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email..." className="form-control mb-2" value={inputs.email || ''} onChange={handleInputChange} />
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password..." className="form-control mb-2" value={inputs.password || ''} onChange={handleInputChange} />
                        <div className="input-group-append pl-2">
                            <button type="button" className="btn btn-info" onClick={submitForm}>Create</button>

                            <button type="button" className="btn btn-danger float-right ml-2"  >Reset</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}