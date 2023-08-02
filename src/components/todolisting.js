

import { AiOutlinePlus } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TodoListing = () => {
   
    const [tododata, tododatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetails = (id) => {
        navigate("/todolist/details/" +id);
    };

    const LoadEdit = (id) => {
        navigate("/todolist/edit/" +id)
    };

    const RemoveFunction = (id) => {
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/todo/" +id,{
                method: "DELETE"
            }).then((res) =>{
                alert('Removed successfully')
                window.location.reload();
            }).catch((err) =>{
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:8000/todo").then((res) => {
            return res.json();
        }).then((resp) => {
            tododatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (

        <div className='container'>
            <div className='card mt-4' style={{ backgroundColor: "#264e70" }} >
                <div className='card-title' style={{ color: "white", fontSize: "28px", fontWeight: "600" }}>TASK LIST</div>
                <div className='card-body' style={{ backgroundColor: "#e1e6e9" }}>
                    <table className=' table-bordered w-100' style={{ margin: '0 auto' }}>
                        <thead>

                            {tododata &&

                            tododata.map(item => (

                                <tr key={item.id}>

                                    <td>
                                        <nav className="navbar">
                                            <div className="container-fluid">
                                                <div className="navbar-brand flex-xl-fill" style={{
                                                    display: 'flex', backgroundColor: '#ced9e2',
                                                    color: '#264e70', fontSize: '24px'
                                                }}>{item.task}</div>
                                                <div className="d-flex">
                                                    <a onClick={() =>{LoadDetails(item.id)}}  className="btn btn-outline" style={{ color: '#1f8be7' }} >Details</a>
                                                    <a onClick={() =>{ LoadEdit(item.id) }} className="btn btn-outline" style={{ color: '#1f8be7' }}>Edit</a>
                                                    <a onClick={() =>{RemoveFunction(item.id)}} className="btn btn-outline" style={{ color: 'red' }}>Remove</a>
                                                </div>
                                            </div>
                                        </nav>

                                    
                                    </td>

                                </tr>
                            ))
                            }
                        </thead>
                    </table>

                    <Link to="todolist/create" className='btn btn-outline' style={{ float: 'left', fontSize: '28px', marginTop: '20px', color: "#264e70" }}><AiOutlinePlus /></Link>

                </div>
            </div>
        </div>


    )

};


export default TodoListing;