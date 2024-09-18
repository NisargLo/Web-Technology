import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div className='container-fluid'>
            <div>
                <nav class="navbar bg-primary-subtle">
                    <a class="navbar-brand"><i class="fa-brands fa-react h1 ms-4"></i></a>
                    <Link to="/" className="h3 mx-4 text-decoration-none text-info-emphasis">Home</Link>
                    <Link to="/About" className="h3 mx-4 text-decoration-none text-info-emphasis">About</Link>
                    <Link to="/Contact" className="h3 mx-4 text-decoration-none text-info-emphasis">Contact</Link>
                    <Link to="/Products" className="h3 mx-4 text-decoration-none text-info-emphasis">Products</Link>
                    <Link to="/Login" className="h3 mx-4 text-decoration-none text-info-emphasis">Login</Link>
                    <form class="d-flex ms-auto" role="search">
                        <input class="form-control m-3" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-primary p-2 my-3 mx-2 me-4" type="submit">Search</button>
                    </form>
                </nav>
            </div>
            <div className='mt-5 pt-5'>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;