import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div className='container-fluid'>
            <div className='float-start w-100'>
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
            <div>
                <div className="w-25 bg-warning-subtle text-center float-start">
                    <div className='py-4'>
                        <div className="mt-2 mb-5">
                            <Link to="/Blog" className="h2 text-decoration-none text-warning-emphasis">Blog</Link>
                        </div>
                        <div className="mb-5">
                            <Link to="/Businesses" className="h2 text-decoration-none text-warning-emphasis">Businesses</Link>
                        </div>
                        <div className="mb-5">
                            <Link to="/Careers" className="h2 text-decoration-none text-warning-emphasis">Careers</Link>
                        </div>
                        <div className="mb-5">
                            <Link to="/Confirmation" className="h2 text-decoration-none text-warning-emphasis">Confirmation</Link>
                        </div>
                        <div className="mb-5">
                            <Link to="/Portfolio" className="h2 text-decoration-none text-warning-emphasis">Portfolio</Link>
                        </div>
                        <div className="mb-2">
                            <Link to="/Businesses" className="h2 text-decoration-none text-warning-emphasis">Businesses</Link>
                        </div>
                    </div>
                </div>
                <div className='float-end w-75 mt-5 pt-5'>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
            <div  className='w-100 float-start'>
                <nav class="navbar bg-success-subtle">
                    <Link to="/Services" className="h3 m-auto text-decoration-none text-success-emphasis">Services</Link>
                    <Link to="/Privacy_Policy" className="h3 m-auto text-decoration-none text-success-emphasis my-3">Privacy Policy</Link>
                    <Link to="/FAQs" className="h3 m-auto text-decoration-none text-success-emphasis">FAQs</Link>
                    <Link to="/Not_Found" className="h3 m-auto me-auto text-decoration-none text-success-emphasis">404 (Not Found)</Link>
                </nav>
            </div>
        </div>
    );
}

export default Layout;