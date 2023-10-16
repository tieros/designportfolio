import IconContainer from '../Components/IconContainer';
import ContactPhone from '../assets/contactphone.svg';

import Just from '../assets/linkedinsvg.svg?react';

const Contact = () => (
    <div className='flex flex-col items-center relative'>
        <h1>Contact</h1>
        <img
            className='absolute top-[20%] left-[20%]'
            src={ContactPhone}
            alt='phone-illustration'
        />
        <div className='w-[292px] sm:w-[487px] flex flex-col items-center text-4xl text-center rounded-full p-[30px] sm:p-[70px]'>
            <h4>
                Some platforms you can reach out to me, check on my work, and
                say me hi!
            </h4>
            <div>Icons</div>
            <IconContainer>
                <Just />
            </IconContainer>
        </div>
    </div>
);

export default Contact;
