import PropTypes from 'prop-types';

const LastEvent = ({ lastEvent }) => {
  return (
    <section className="external-container py-8">
      <h2 className="mb-4 text-center font-accent tracking-widest font-bold">
        <p className="text-lg text-red-600">Last event</p>
        <p className="text-4xl">{lastEvent.title}</p>
      </h2>
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
