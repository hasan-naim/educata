// import CourseSec from './Components/CourseSec';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CssCrash from './Components/pages/courses/CssCrash';
import HtmlCrash from './Components/pages/courses/HtmlCrash';
import CoursesPage from './Components/pages/CoursesPage';
import ErrorPage from './Components/pages/ErrorPage';
import HomePage from './Components/pages/HomePage';
import './css/App.css';
import './css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/courses/html-crash" element={<HtmlCrash />} />
                <Route path="/courses/css-crash" element={<CssCrash />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
