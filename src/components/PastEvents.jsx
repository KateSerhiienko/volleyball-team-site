import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EventCardCover from './EventCardCover';

const PastEvents = ({ pastEvents, showAllEvents = false }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const eventsToShow = showAllEvents
    ? pastEvents.slice().reverse()
    : pastEvents.slice(0, 3).reverse();

  const loadMoreEvents = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="bg-main-dark/10">
      <div className="external-container py-10 sm:py-16 lg:py-20">
        {!showAllEvents && (
          <h2 className="mb-4 text-center font-accent tracking-widest font-bold">
            <p className="text-lg text-red-600">Gallery of</p>
            <p className="text-4xl">our past events</p>
          </h2>
        )}
        <div className="mb-10">
          {eventsToShow.slice(0, visibleCount).map((event, index) => (
            <EventCardCover key={index} event={event} />
          ))}
        </div>
        {!showAllEvents ? (
          <Link to="/events">
            <button className="block btn-primary-2 mx-auto">
              Show all events
            </button>
          </Link>
        ) : (
          visibleCount < eventsToShow.length && (
            <div className="text-center">
              <button
                className="block btn-primary-2 mx-auto"
                onClick={loadMoreEvents}
              >
                Show more events
              </button>
            </div>
          )
        )}
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
  showAllEvents: PropTypes.bool,
};

export default PastEvents;
