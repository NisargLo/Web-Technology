// WAP to do CRUD operation on faculties stored as array using ReactJS.

import React, { useState } from 'react';

const FacultyApp = () => {

    const [faculty, setFaculty] = useState([
        { id: 1, name: 'Faculty 1', department: 'Math' },
        { id: 2, name: 'Faculty 2', department: 'Science' },
        { id: 3, name: 'Faculty 3', department: 'History' }
    ]);

    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [editFaculty, setEditFaculty] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (editFaculty) {
            setFaculty(
                faculty.map((person) =>
                    person.id === editFaculty.id
                        ? { ...person, name, department }
                        : person
                )
            );
            setEditFaculty(null);
        } else {
            const newFaculty = {
                id: Date.now(),
                name,
                department,
            };
            setFaculty([...faculty, newFaculty]);
        }

        setName('');
        setDepartment('');
    };

    const handleDelete = (id) => {
        setFaculty(faculty.filter((person) => person.id !== id));
    };

    const handleEdit = (person) => {
        setEditFaculty(person);
        setName(person.name);
        setDepartment(person.department);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Faculty CRUD Operations</h1>
            <form onSubmit={handleFormSubmit} className="mb-4">
                <div className="form-group mb-3">
                    <label htmlFor="name" className="mb-2">Faculty Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control border border-2 border-secondary"
                        placeholder="Enter faculty name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="department" className="mb-2">Department</label>
                    <input
                        type="text"
                        id="department"
                        className="form-control border border-2 border-secondary"
                        placeholder="Enter department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                    {editFaculty ? 'Update Faculty' : 'Add Faculty'}
                </button>
            </form>

            <h2 className="mb-4">Faculty List</h2>
            <ul className="list-group">
                {faculty.map((person) => (
                    <li key={person.id} className="list-group-item d-flex justify-content-between align-items-center mb-3 border border-2 border-secondary">
                        {person.name} - {person.department}
                        <div>
                            <button
                                className="btn btn-warning btn-sm mx-2"
                                onClick={() => handleEdit(person)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(person.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FacultyApp;
