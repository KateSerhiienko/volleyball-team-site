import PropTypes from 'prop-types';
import Team from '../components/Team';

const TeamPage = ({ teamMembers }) => {
  return (
    <>
      <Team showAllTeam={true} teamMembers={teamMembers} />
    </>
  );
};

TeamPage.propTypes = {
  teamMembers: PropTypes.array.isRequired,
};

export default TeamPage;
