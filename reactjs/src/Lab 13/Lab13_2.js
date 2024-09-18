import { useState, useEffect } from "react";

const apiURL = "https://66eac91655ad32cda47a64c9.mockapi.io/myStudents";

function StudentsTable() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch(apiURL).then((res) => {
            return res = res.json();
        }).then((data) => {
            setStudents(data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="container-fluid d-flex justify-content-center w-100">
            <div className="w-50">
                <h1 class="my-3 text-center">Student Details</h1>
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td><img src={student.avatar} width="50px" height="50px" alt="avatar" /></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


function Counter() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    function startCounter() {
        setIsRunning(true);
    }

    function pauseCounter() {
        setIsRunning(false);
    }
    
    const stopCounter = () => {
        setIsRunning(false);
        setCount(0);
    }

    return (
        <div className="my-5">
            <center>
                <div className="border border-2 border-secondary rounded w-50">
                    <p className="my-4 display-4 text-secondary">StopWatch - {count} sec...</p>
                    <button onClick={startCounter} className="btn btn-success mx-2 mb-4">Start</button>
                    <button onClick={pauseCounter} className="btn btn-warning mx-2 mb-4">Pause</button>
                    <button onClick={stopCounter} className="btn btn-danger mx-2 mb-4">Stop</button>
                </div>
            </center>
        </div>
    );
}

export { StudentsTable, Counter };