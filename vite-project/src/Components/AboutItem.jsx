const AboutItem = ({ text, imageSrc }) => (
    <div className='origin-left cursor-pointer flex items-center  hover:scale-150 hover:bg-opacity-80 hover:backdrop-blur-md'>
        <div className='w-14 h-14 shadow-tag flex items-center justify-center rounded-full bg-white border-black border-2'>
            {imageSrc ? (
                <img src={imageSrc} alt='Circle Icon' className='w-10 h-10' />
            ) : (
                <div className='w-10 h-10 bg-white rounded-full'></div>
            )}
        </div>
        <div className='ml-2 font-Poppins font-medium'>{text}</div>
    </div>
);

export default AboutItem;
