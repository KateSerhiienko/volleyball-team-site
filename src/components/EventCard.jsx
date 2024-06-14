import PropTypes from 'prop-types';
import { FaMapMarker, FaCalendar, FaTrophy } from 'react-icons/fa';

const EventCard = ({ event }) => {
  return (
    <div className="flex flex-col justify-between p-4 mb-4 rounded overflow-hidden bg-white md:flex-row">
      <div
        className="shrink-0 w-full h-72 md:w-72 md:h-40 mr-4 mb-4 rounded bg-cover bg-center bg-no-repeat md:mb-0"
        style={{
          backgroundImage: `url(/events/event-${event.date}/event-${
            event.date
          }-${event.coverPhoto || 1}.${event.photosFormat})`,
        }}
      ></div>
      <div className="md:mr-4">
        <h3 className="line-clamp-1 text-xl uppercase">
          <span className="mr-4 font-bold transition hover:text-red-600 cursor-pointer">
            {event.title}
          </span>
          <FaTrophy className="inline pb-1 mr-1 text-red-600" />
          <span>{event.placeInTheTournament}</span>
        </h3>
        <p className="line-clamp-1 text-red-600 text-sm mb-4">
          <FaCalendar className="inline pb-1 mr-1" />
          <span className="mr-2">{event.date}</span>
          <FaMapMarker className="inline pb-1" />
          <span>{event.place}</span>
        </p>
        <p className="h-24 line-clamp-4 opacity-60 mb-4 md:mb-0">
          {event.description}
        </p>
      </div>
      <div className="flex md:hidden lg:flex  items-center shrink-0 md:pl-4 md:border-l-2">
        <button className="btn-primary-2">More info</button>
      </div>
    </div>
  );
};

EventCard.propTypes = {
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
};

export default EventCard;
