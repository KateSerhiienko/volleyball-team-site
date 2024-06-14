import PropTypes from 'prop-types';
import { useState } from 'react';
import EventCard from './EventCard';

const PastEvents = ({ pastEvents }) => {
  const [showAllPastEvents, setShowAllPastEvents] = useState(false);

  let shownEvents = pastEvents;

  if (!showAllPastEvents) {
    shownEvents = pastEvents.slice(0, 3);
  }

  return (
    <div className="bg-slate-100">
      <div className="external-container py-8">
        <h2 className="mb-4 text-center font-accent tracking-widest font-bold">
          <p className="text-lg text-red-600">Gallery of</p>
          <p className="text-4xl">our past events</p>
        </h2>
        <div className="mb-6">
          {shownEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
        <button
          className="block btn-primary-2 mx-auto"
          onClick={() => setShowAllPastEvents((prevState) => !prevState)}
        >
          {showAllPastEvents ? 'Show less events' : 'Show more events'}
        </button>
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
