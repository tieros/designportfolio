import PropTypes from 'prop-types';

const AboutItem = ({ text, imageSrc, bgColor }) => (
    <div className='aboutItemAnimate origin-left cursor-pointer flex items-center  hover:scale-150 hover:bg-opacity-80 hover:backdrop-blur-md'>
        <div className='shadow-tag flex items-center justify-center rounded-full bg-white border-black border-2'>
            {imageSrc ? (
                <div
                    className={`bg-contain bg-no-repeat w-10 h-10 rounded-full ${bgColor}`}
                    style={{ backgroundImage: `url(${imageSrc})` }}
                ></div>
            ) : (
                <div
                    className={`w-10 h-10 bg-white rounded-full ${bgColor}`}
                ></div>
            )}
        </div>
        <div className='ml-5 font-Poppins action-text'>{text}</div>
    </div>
);

AboutItem.propTypes = {
    text: PropTypes.node,
    imageSrc: PropTypes.string,
    bgColor: PropTypes.string,
};

export default AboutItem;
