
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Dashboard from "./pages/Dashboard.jsx";
import Tender from "./pages/Tender.jsx";
// import NotFound from "../components/NotFound.jsx";

const Navigation=() => {
    return (
        <Router>
            <Routes>
                {/* <Route path="*" element={<NotFound/>} />   */}
                <Route path="/" element={<Dashboard/>} />
                <Route path="/tender/:id" element={<Tender/>} />
                
            </Routes>            
        </Router>
    )
}

export default Navigation;
