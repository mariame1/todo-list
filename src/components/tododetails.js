import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const TodoDetail = () => {

    const { todoid } = useParams();
    const [tododata, tododatachange] = useState();


    useEffect(() => {
        fetch("http://localhost:8000/todo/" + todoid).then((res) => {
            return res.json();
        }).then((resp) => {
            tododatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })

    }, []);



    return (
        <div className="container">
            <div className="card w-75" style={{ margin: "0 auto" }}>
                <div className="card-title p-3" style={{
                    backgroundColor: "#264e70",
                    color: 'white', fontSize: "28px", fontWeight: 700
                }}>Details</div>

                <div className="card-body" style={{ backgroundColor: "#e1e6e9"}}></div>

                {tododata &&

                    <div >
                        <h2>ID: <span style={{fontSize: "22px"}} className="ms-3 text-muted">{tododata.id}</span></h2>
                        <hr></hr>
                        <h2>Task: <span style={{fontSize: "22px"}} className="ms-3 text-muted">{tododata.task}</span></h2>
                        <hr></hr>
                        <h2>Location: <span style={{fontSize: "22px"}} className="ms-3 text-muted">{tododata.location}</span></h2>
                        <hr></hr>
                        <h2>Description: <span  className="ms-3 "></span>
                        <p className="text-muted mt-3" style={{fontSize: "24px"}}>{tododata.description}</p>
                        </h2>
                        <hr></hr>

                        <Link style={{color: "red"}} className="btn btn-outline" to="/">Back to Listing</Link>


                    </div>
                }



            </div>
        </div>
    );
};



export default TodoDetail;