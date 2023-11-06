import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import BackArrow from '../assets/backarrow.svg?react';

const CaseStudyNavigation = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();

    const workPages = [
        {
            name: 'Paybud',
            url: '/work/paybud',
            imageSrc: '/paybudhero.webp',
        },
        {
            name: 'Sparky',
            url: '/work/sparky',
            imageSrc: '/src/assets/Sparky.png',
        },
        {
            name: 'Lumea',
            url: '/work/lumea',
            imageSrc: '/src/assets/Lumea.png',
        },
    ];

    const otherWorkPages = workPages.filter((page) => page.url !== currentPath);

    return (
        <div className='flex flex-col items-end p-20 gap-16 '>
            <div className='flex gap-10 self-center w-full justify-evenly'>
                {otherWorkPages.map((page) => (
                    <Link
                        key={page.url}
                        to={page.url}
                        className='flex flex-col justify-between border border-[#dcdcdc] rounded-lg p-10'
                    >
                        <img
                            src={page.imageSrc}
                            alt={page.name}
                            className='max-w-[210px]'
                        />
                        <Button className={'!text-black !max-w-[250px] !bg-bg'}>
                            See {page.name}
                        </Button>
                    </Link>
                ))}
            </div>
            <Button
                className={'!max-w-[250px] flex gap-4'}
                onClick={() => navigate('/')}
            >
                <BackArrow /> Back to Home
            </Button>
        </div>
    );
};

export default CaseStudyNavigation;
