// WAP to do CRUD operation on students stored as array using ReactJS.

import React, { useState } from 'react';

const StudentApp = () => {

    const [students, setStudents] = useState([
        { id: 1, name: 'Student 1', age: 20, course: 'Computer Science' },
        { id: 2, name: 'Student 2', age: 22, course: 'Mathematics' },
        { id: 3, name: 'Student 3', age: 21, course: 'Physics' }
    ]);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [editStudent, setEditStudent] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (editStudent) {
            setStudents(
                students.map((student) =>
                    student.id === editStudent.id
                        ? { ...student, name, age: parseInt(age), course }
                        : student
                )
            );
            setEditStudent(null);
        } else {
            const newStudent = {
                id: Date.now(),
                name,
                age: parseInt(age),
                course,
            };
            setStudents([...students, newStudent]);
        }

        setName('');
        setAge('');
        setCourse('');
    };

    const handleDelete = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    const handleEdit = (student) => {
        setEditStudent(student);
        setName(student.name);
        setAge(student.age);
        setCourse(student.course);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Student CRUD Operations</h1>
            <form onSubmit={handleFormSubmit} className="mb-4">
                <div className="form-group mb-3">
                    <label htmlFor="name" className="mb-2">Student Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control border border-2 border-secondary"
                        placeholder="Enter student name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="age" className="mb-2">Student Age</label>
                    <input
                        type="number"
                        id="age"
                        className="form-control border border-2 border-secondary"
                        placeholder="Enter student age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="course" className="mb-2">Course</label>
                    <input
                        type="text"
                        id="course"
                        className="form-control border border-2 border-secondary"
                        placeholder="Enter student course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                    {editStudent ? 'Update Student' : 'Add Student'}
                </button>
            </form>

            <h2 className="mb-4">Student List</h2>
            <ul className="list-group">
                {students.map((student) => (
                    <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center mb-3 border border-2 border-secondary">
                        {student.name} - Age: {student.age}, Course: {student.course}
                        <div>
                            <button
                                className="btn btn-warning btn-sm mx-2"
                                onClick={() => handleEdit(student)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(student.id)}
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

export default StudentApp;
