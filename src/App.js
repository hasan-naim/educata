import CourseSec from './Components/CourseSec';
import HeroSec from './Components/HeroSec';
import Navbar from './Components/Navbar';
import './css/App.css';
import './css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSec />
            <CourseSec />
        </div>
    );
}

export default App;
