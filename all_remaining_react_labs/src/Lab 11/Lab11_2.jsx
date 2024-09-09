// Display Faculties stored in array using ReactJS.

const DisplayFaculties = ()=>{
    const faculties = [
        {id: 1, name: 'Dr. Smith'},
        {id: 2, name: 'Dr. Johnson'},
        {id: 3, name: 'Dr. Anderson'},
        {id: 4, name: 'Dr. Wilson'},
        {id: 5, name: 'Dr. Thomas'}
    ];

    return (
        <>
            <h1 class="m-3">Faculty Details :-</h1>
            <table class="table table-bordered border-primary mx-3 w-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {faculties.map((faculty)=>{
                        return(
                            <tr key={faculty.id}>
                                <td>{faculty.id}</td>
                                <td>{faculty.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default DisplayFaculties;