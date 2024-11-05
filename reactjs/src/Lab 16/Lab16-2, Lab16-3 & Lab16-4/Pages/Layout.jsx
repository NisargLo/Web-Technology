import { Outlet, Link, useNavigate } from 'react-router-dom';
import '../Styles/Layout_Styles.css';
import { useLocation } from 'react-router-dom';

function Layout() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddClick = () => {
        navigate('/add');
    };

    const isHomePage = location.pathname === '/';

    return (
        <div className='container-fluid'>
            <div className='mb-4 sticky-top'>
                <nav className="navbar bg-secondary bg-gradient">
                    <a href="/" className="navbar-brand"><i className="text-light fa-solid fa-note-sticky h1 ms-4" /></a>
                    <Link to="/" className="h2 ms-5 me-auto text-decoration-none text-light"><i className="fa-solid fa-house"></i> Home</Link>
                </nav>
            </div>
            <div className='my-3'>
                <Outlet />
            </div>
            <div className='custom-fixed bg-light bg-gradient rounded-3 ms-3 me-3 p-1'>
                {isHomePage && (
                    <button
                        className="btn btn-success bg-gradient rounded-3 py-2 px-3"
                        onClick={handleAddClick}>
                        <p className='h3'>
                            <i className="fa-solid fa-plus text-light-subtle"></i> Add
                        </p>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Layout;
