import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import EventCard from './EventCard';

const EventPopup = ({ event, onClose }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="fixed p-4 inset-0 z-50 flex items-center justify-center bg-main-dark/80 backdrop-blur">
      <div className="relative external-container py-10 sm:py-16 lg:py-18 overflow-y-auto max-h-full bg-white rounded">
        <button
          className="absolute top-4 right-4 text-xl hover:text-red-600"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <EventCard event={event} />
      </div>
    </div>
  );
};

EventPopup.propTypes = {
  event: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    place: PropTypes.string,
    placeInTheTournament: PropTypes.number,
    amountOfPhotos: PropTypes.number.isRequired,
    coverPhoto: PropTypes.number,
    photosFormat: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EventPopup;
