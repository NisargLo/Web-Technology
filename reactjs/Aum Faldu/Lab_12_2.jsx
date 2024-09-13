import {BrowserRouter,Route,Routes,Outlet,Link} from 'react-router-dom'
const Home = ()=>{
    return (<h1>Home Page</h1>)
}
const About = ()=>{
    return (<h1>About Us Page</h1>)
}
const Contact = ()=>{
    return (<h1>Contact Us Page</h1>)
}
const Product = ()=>{
    return (<h1>Product Page</h1>)
}
const Services = ()=>{
    return (<h1>Services Page</h1>)
}
const Layout = ()=>{
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col border border-">
                    <Link to="/Home" element={<Home />}>Home</Link>
                    <Link to="/About" element={<About />}>About</Link>
                    <Link to="/Contact" element={<Contact />}>Contact</Link>
                    <Link to="/Product" element={<Product />}>Product</Link>
                    <Link to="/Services" element={<Services />}>Services</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-3 border border-warning"><h2>Sidebar</h2></div>
                <div className="col border border-info"><Outlet/></div>
            </div>
            <div className="row">
                <div className="col border border-danger"><h2 class='start-50 end-50'>Footer</h2></div>
            </div>
        </div>
        </>
    )
}
const App = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/Home' element={<Home />}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/Product' element={<Product/>}/>
                    <Route path='/Services' element={<Services/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;