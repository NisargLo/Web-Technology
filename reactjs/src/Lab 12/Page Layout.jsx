function Layout(){
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/Product">Product</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}

export default Layout;