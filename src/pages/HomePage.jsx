import PropTypes from 'prop-types';
import LastEvent from '../components/LastEvent';
import PastEvents from '../components/PastEvents';
import Team from '../components/Team';

const HomePage = ({ data }) => {
  return (
    <>
      <LastEvent
        lastEvent={data.eventsArchive[data.eventsArchive.length - 1]}
      />
      <PastEvents pastEvents={data.eventsArchive} />
      <Team teamMembers={data.teamMembers} />
    </>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePage;
