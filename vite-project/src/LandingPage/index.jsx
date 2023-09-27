import Hero from './Hero';
import { Link } from 'react-router-dom';

const LandingPage = () => (
    <>
        <header className='flex justify-center relative max-w-[1440px] m-auto'>
            <div className='absolute left-[5%]'>Logo</div>
            <nav className='flex gap-10 font-Poppins text-xl p-4'>
                <Link>Work</Link>
                <Link>About</Link>
                <Link>Tools & Langs</Link>
                <Link>Contact</Link>
            </nav>
        </header>

        <Hero />
    </>
);
export default LandingPage;
