import { Link } from 'react-router-dom';

function Layout() {
    return (
        <>
            <div>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand"><i class="fa-brands fa-react h1 mx-2"></i></a>
                        <Link to="/" className="h2 mx-5 text-decoration-none text-primary">Home</Link>
                        <Link to="/about" className="h2 mx-5">About</Link>
                        <Link to="/" className="h2 mx-5">Contact</Link>
                        <Link to="/" className="h2 mx-5">Products</Link>
                        <Link to="/" className="h2 mx-5">Services</Link>
                        <Link to="/" className="h2 mx-5">Login</Link>
                        <form class="d-flex ms-auto" role="search">
                            <input class="form-control m-3" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success p-2 my-3 mx-2" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Layout;