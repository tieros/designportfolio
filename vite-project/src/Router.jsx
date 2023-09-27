import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';

function WorkExample() {
    return <h1>WorkExample</h1>;
}

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' Component={LandingPage} />
                <Route path='/work/:id' Component={WorkExample} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
