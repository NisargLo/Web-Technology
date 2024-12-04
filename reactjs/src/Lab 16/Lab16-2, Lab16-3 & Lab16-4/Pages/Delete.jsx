import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Delete({ faculty, onDelete }) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete this faculty data?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        });

        if (result.isConfirmed) {
            await fetch(`https://672a173b976a834dd0221a02.mockapi.io/Faculties/${faculty.FacultyID}`, {
                method: 'DELETE',
            });
            onDelete(faculty.FacultyID);
            Swal.fire(
                'Deleted!',
                'Your faculty data has been deleted.',
                'success'
            );
            navigate('/');
        } else {
            Swal.fire(
                'Cancelled',
                'Your faculty data is safe :)',
                'info'
            );
        }
    };

    return (
        <>
            <button className="btn btn-danger rounded-3 py-2 px-3 me-2" onClick={handleDelete}>
                <p className='h5'><i className="fa-solid fa-trash"></i> Delete</p>
            </button>
        </>
    );
}

export default Delete;
