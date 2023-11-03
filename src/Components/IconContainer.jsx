import PropTypes from 'prop-types';
const IconContainer = ({ bgColor, children }) => (
    <div
        className={`icon-container cursor-pointer z-20 w-[15vw] h-[15vw] sm:w-16 sm:h-16 flex justify-center items-center rounded-full border-2 border-[#133834] shadow-iconContainer hover:shadow-iconContainerHover ${bgColor}`}
    >
        {children}
    </div>
);

IconContainer.propTypes = {
    children: PropTypes.node,
    bgColor: PropTypes.string,
};

export default IconContainer;
