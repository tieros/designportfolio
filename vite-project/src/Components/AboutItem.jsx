import PropTypes from 'prop-types';

const AboutItem = ({ text, imageSrc }) => (
    <div className='aboutItemAnimate origin-left cursor-pointer flex items-center  hover:scale-150 hover:bg-opacity-80 hover:backdrop-blur-md'>
        <div className='shadow-tag flex items-center justify-center rounded-full bg-white border-black border-2'>
            {imageSrc ? (
                <img src={imageSrc} alt='Circle Icon' className='w-6 h-6' />
            ) : (
                <div className='w-6 h-6 bg-white rounded-full'></div>
            )}
        </div>
        <div className='ml-5 font-Poppins font-medium'>{text}</div>
    </div>
);

AboutItem.propTypes = {
    text: PropTypes.string,
    imageSrc: PropTypes.string,
};

export default AboutItem;
