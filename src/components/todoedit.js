import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineStepBackward } from "react-icons/ai";


const TodoEdit = () => {
    const { todoid } = useParams();

    useEffect(() => {
        fetch("http://localhost:8000/todo/" + todoid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            taskchange(resp.task);
            locationchange(resp.location);
            descriptionchange(resp.description);

        }).catch((err) => {
            console.log(err.message);
        })
    }, []);



    const [id, idchange] = useState("");
    const [task, taskchange] = useState("");
    const [location, locationchange] = useState("");
    const [description, descriptionchange] = useState("");


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const tododata = { task, location, description };

        fetch("http://localhost:8000/todo/" + todoid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(tododata)
        }).then((res) => {
            alert('Saved successfully')
            navigate('/');
        }).catch((err) => {
            console.log(err.message);
        })
    }


    return (
        <form className="container" onSubmit={handlesubmit} >
            <div className="card w-75 mt-5" style={{ margin: '0 auto', backgroundColor: "#264e70", color: "#264e70" }}>
                <div className="card-title mt-2" style={{ color: 'white' }}>
                    <h2 style={{ fontSize: '30px' }}>EDIT FORM</h2>
                </div>
                <div className="card-body" style={{ backgroundColor: "#e1e6e9" }}>

                    <div className="form-group"></div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">ID</label>
                        <input value={id} type="id" className="form-control" disabled='disabled' placeholder="ID"></input>
                    </div>

                    <div class="mb-3">
                        <label className="form-label">Task</label>
                        <input value={task} onChange={e => taskchange(e.target.value)} className="form-control" placeholder="Write Task Here !"></input>

                    </div>

                    <div class="mb-3">
                        <label className="form-label">Location</label>
                        <input value={location} onChange={e => locationchange(e.target.value)} className="form-control" placeholder="Loction!"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea value={description} onChange={e => descriptionchange(e.target.value)} className="form-control" rows="3"></textarea>
                    </div>

                    <Link to="/" className='back-icon' style={{ fontSize: '30px', float: 'left', color: '#264e70' }}>< AiOutlineStepBackward /></Link>
                    <button type='submit' className='btn btn-outline' style={{ float: 'right', color: '#0a5844', fontSize: '22px', fontWeight: 700 }}>SAVE</button>

                </div>

            </div>
        </form>

    )

}



export default TodoEdit;