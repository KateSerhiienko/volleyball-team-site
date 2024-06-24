import PastEvents from '../components/PastEvents';
import PropTypes from 'prop-types';

const EventsPage = ({ eventsArchive }) => {
  return (
    <>
      <PastEvents showAllEvents={true} pastEvents={eventsArchive} />
    </>
  );
};

EventsPage.propTypes = {
  showAllEvents: PropTypes.bool,
  eventsArchive: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      place: PropTypes.string,
      placeInTheTournament: PropTypes.number,
      amountOfPhotos: PropTypes.number.isRequired,
      coverPhoto: PropTypes.number,
      photosFormat: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EventsPage;
