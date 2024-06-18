import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';

const PastEvents = ({ pastEvents }) => {
  const reversedPastEvents = pastEvents.slice(0, 3).reverse();

  return (
    <div className="bg-main-dark/10">
      <div className="external-container py-10 sm:py-16 lg:py-20">
        <h2 className="mb-4 text-center font-accent tracking-widest font-bold">
          <p className="text-lg text-red-600">Gallery of</p>
          <p className="text-4xl">our past events</p>
        </h2>
        <div className="mb-10">
          {reversedPastEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
        <Link to="/events">
          <button className="block btn-primary-2 mx-auto">
            Show more events
          </button>
        </Link>
      </div>
    </div>
  );
};

PastEvents.propTypes = {
  pastEvents: PropTypes.arrayOf(
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

export default PastEvents;
