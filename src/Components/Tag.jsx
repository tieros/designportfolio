import PropTypes from 'prop-types';

const Tag = ({ children, bgColor }) => (
    <div
        className={`action-text cursor-default min-w-max inline-flex px-4 py-1 lg:py-2 rounded-[27px] text-base font-Poppins font-medium xl:text-base ${bgColor}`}
    >
        {children}
    </div>
);

Tag.propTypes = {
    children: PropTypes.node,
    bgColor: PropTypes.string,
};

export default Tag;
