import { useNavigate } from "react-router-dom";
import '../Styles/Home_Styles.css';
import { useState, useEffect } from "react";
import Delete from './Delete';

function Home() {
    const [faculties, setFaculties] = useState([]);
    const [error, setError] = useState([]);
    const APIURL = 'https://672a173b976a834dd0221a02.mockapi.io/Faculties/';
    const navigate = useNavigate();

    useEffect(() => {
        fetchFaculties();
    }, [APIURL]);

    const fetchFaculties = () => {
        fetch(APIURL)
        .then(response => response.json())
        .then(data => {
            setFaculties(data);
            setError(null);
        })
        .catch(error => {
            setError(`Error: `+error.message);
        });
    };


    const handleReadClick = (faculty) => {
        navigate(`/read/${faculty.FacultyID}`, { state: faculty });
    };

    const handleEditClick = (faculty) => {
        navigate(`/edit/${faculty.FacultyID}`, { state: faculty });
    };

    const handleDeleteClick = async (FacultyID) => {
        await setFaculties((prevFaculties) => prevFaculties.filter(faculty => faculty.FacultyID !== FacultyID));
        fetchFaculties();
    };

    return (
        <>
            <center>
                <div className="d-flex justify-content-center row">
                    {error && <p className="error h3 text-danger">{error}</p>}
                    {faculties.map((faculty, index) => (
                        <div key={index} className="col-auto mb-4" style={{ maxWidth: '30rem' }}>
                            <div className="card d-flex justify-content-center align-content-center border border-2 border-dark-subtle">
                                <div className="card-header text-truncate px-2 myHeader border-2 border-dark-subtle">{faculty.FacultyName}</div>
                                <div className="m-2">
                                    <img src={faculty.FacultyImage} className="card-img-top rounded img-fluid myimg" alt={faculty.FacultyName} />
                                </div>
                                <div className="card-body mb-2">
                                    <p className="card-title text-truncate myTitle h-100">{faculty.FacultyName}</p>
                                    <p className="card-text text-truncate myContent">{faculty.FacultyExp}</p>
                                </div>
                                <div className="d-flex justify-content-center mb-2">
                                    <div className="mx-3">
                                        <button className="btn btn-primary rounded-3 py-2 px-3" onClick={() => handleReadClick(faculty)}><p className='h5'><i className="fa-solid fa-book"></i> Read</p></button>
                                    </div>
                                    <div className="mx-3">
                                        <button className="btn btn-warning rounded-3 py-2 px-3" onClick={() => handleEditClick(faculty)}><p className='h5'><i className="fa-solid fa-pen-to-square"></i> Edit</p></button>
                                    </div>
                                    <div className="mx-3">
                                        <Delete faculty={faculty} onDelete={handleDeleteClick} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </center>
        </>
    );
}

export default Home;
