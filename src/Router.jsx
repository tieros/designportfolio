import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Paybud from './CaseStudies/Paybud';
import Lumea from './CaseStudies/Lumea';
import Sparky from './CaseStudies/Sparky';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' Component={LandingPage} />
                <Route path='/work/paybud' Component={Paybud} />
                <Route path='/work/sparky' Component={Sparky} />
                <Route path='/work/lumea' Component={Lumea} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
