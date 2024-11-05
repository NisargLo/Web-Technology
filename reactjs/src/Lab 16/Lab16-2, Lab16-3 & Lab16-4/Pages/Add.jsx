import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Add() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        FacultyName: '',
        FacultyImage: '',
        FacultyExp: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('https://672a173b976a834dd0221a02.mockapi.io/Faculties/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        navigate('/');
    }

    return (
        <div className="px-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="title" className="form-label" style={{ fontSize: '3rem' }}>Name</label>
                    <input
                        type="text"
                        className="form-control border border-dark border-3"
                        name="FacultyName"
                        placeholder="Enter Name"
                        style={{ fontSize: '1.25rem' }}
                        value={formData.FacultyName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="image" className="form-label" style={{ fontSize: '3rem' }}>Image</label>
                    <input
                        type="text"
                        className="form-control border border-dark border-3"
                        name="FacultyImage"
                        placeholder="Enter Picture URL"
                        style={{ fontSize: '1.25rem' }}
                        value={formData.FacultyImage}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label" style={{ fontSize: '3rem' }}>Experience</label>
                    <input
                        type="text"
                        className="form-control border border-dark border-3"
                        name="FacultyExp"
                        placeholder="Enter Experience"
                        style={{ fontSize: '1.25rem' }}
                        value={formData.FacultyExp}
                        onChange={handleChange}
                    />
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-secondary rounded-3 py-2 px-3 mx-5" onClick={() => navigate(-1)}>
                        <p className="h5"><i className="fa-solid fa-backward"></i> Back</p>
                    </button>
                    <button type="submit" className="btn btn-success rounded-3 py-2 px-3 mx-5">
                        <p className="h5"><i className="fa-solid fa-upload"></i> Submit</p>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Add;