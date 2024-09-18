// Display Students stored in array using ReactJS

const DisplayStudents = () => {
    const students = [
        { id: 1, name: 'Alice', grade: 'A' },
        { id: 2, name: 'Bob', grade: 'B' },
        { id: 3, name: 'Charlie', grade: 'C' },
        { id: 4, name: 'David', grade: 'B' },
        { id: 5, name: 'Eve', grade: 'A' }
    ];

    return (
        <div className="container-fluid d-flex justify-content-center w-100">
            <div className="w-25">
                <h1 class="my-3 text-center">Student Details</h1>
                <table class="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.grade}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DisplayStudents;