import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Paybud from './CaseStudies/Paybud';
function SparkyComponent() {
    return <h1> SPARKY COMPONENT</h1>;
}

function LumeaComponent() {
    return <h1> lumea COMPONENT</h1>;
}

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' Component={LandingPage} />
                <Route path='/work/paybud' Component={Paybud} />
                <Route path='/work/sparky' Component={SparkyComponent} />
                <Route path='/work/lumea' Component={LumeaComponent} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
