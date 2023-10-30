import PropTypes from 'prop-types';

const ChallengeCard = ({ title, content }) => {
    return (
        <div
            className='p-6 border-[#DCDCDC] border rounded-lg flex flex-col gap-6
        w-[284px] lg:h-[300px]'
        >
            <h5 className='text-sm lg:text-2xl font-semibold'>{title}</h5>
            <p className='text-[10px] lg:text-xs text-[#767676]'>{content}</p>
        </div>
    );
};

ChallengeCard.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

export default ChallengeCard;
