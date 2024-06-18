import Upcoming from '../components/Upcoming';
import Hero from '../components/Hero';
import LastEvent from '../components/LastEvent';
import PastEvents from '../components/PastEvents';
import Team from '../components/Team';

const HomePage = ({ data }) => {
  return (
    <>
      <Hero>
        <Upcoming upcomingEvents={data.upcomingEvents} />
      </Hero>
      <LastEvent
        lastEvent={data.eventsArchive[data.eventsArchive.length - 1]}
      />
      <PastEvents pastEvents={data.eventsArchive} />
      <Team teamMembers={data.teamMembers} />
    </>
  );
};

export default HomePage;
