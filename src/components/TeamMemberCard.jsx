import PropTypes from 'prop-types';

const TeamMemberCard = ({ teamMember }) => {
  return (
    <>
      <div className="w-56 h-auto mx-auto p-4 bg-main-dark/10 rounded overflow-hidden text-center">
        <div
          className="w-full h-72 mb-4 rounded bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${teamMember.img})`,
          }}
        ></div>
        <h3 className="font-bold">{teamMember.name}</h3>
        <p className="mb-4 text-sm">
          {teamMember.position && `${teamMember.position}`}
        </p>
      </div>
    </>
  );
};

TeamMemberCard.propTypes = {
  teamMember: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamMemberCard;
