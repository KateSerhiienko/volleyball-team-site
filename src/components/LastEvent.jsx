import PropTypes from 'prop-types';
import EventCard from './EventCard';

const LastEvent = ({ lastEvent }) => {
  return (
    <section className="external-container py-10 sm:py-16 lg:py-20">
      <h2 className="text-center font-accent tracking-widest font-bold">
        <p className="text-lg text-red-600">Last event</p>
      </h2>
      <EventCard event={lastEvent} />
    </section>
  );
};

LastEvent.propTypes = {
  lastEvent: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    place: PropTypes.string,
    placeInTheTournament: PropTypes.number,
    amountOfPhotos: PropTypes.number.isRequired,
    coverPhoto: PropTypes.number,
    photosFormat: PropTypes.string.isRequired,
  }).isRequired,
};

export default LastEvent;
