import { node } from 'prop-types';

const Card = ({ className, children }) => {
    return (
        <div
            className={`shadow-[0_4px_16px_0_rgba(90,114,91,0.23)]
                        py-10 px-9 bg-[#F9F8F6] rounded-[6px] ${className}
    `}
        >
            {children}
        </div>
    );
};

export default Card;

Card.propTypes = {
    className: node,
    children: node,
};
