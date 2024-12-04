import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Read from './Pages/Read';
import Add from './Pages/Add';
import Edit from './Pages/Edit';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/read/:title' element={<Read />} />
                        <Route path='/add' element={<Add />} />
                        <Route path='/edit/:title' element={<Edit />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
