import './App.css';
import AppRouter from './Router';

import { useState, useEffect } from 'react';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.fonts.load('62px Lalezar').then(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading]);
    return (
        <div className='App'>
            {isLoading ? (
                // Show your loading SVG here.
                <div className='loading-svg'>Loading...</div>
            ) : (
                // Render your main content when all CSS is loaded.
                <AppRouter></AppRouter>
            )}
        </div>
    );
}

export default App;
