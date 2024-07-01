import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import TeamMemberCard from './TeamMemberCard';

const Team = ({ teamMembers, showAllTeam = false }) => {
  const sliderSettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="external-container py-10 sm:py-16 lg:py-20">
      {!showAllTeam && (
        <h2 className="mb-4 text-center font-accent tracking-widest font-bold">
          <p className="text-lg text-red-600">TEAM</p>
          <p className="text-4xl">FREIBERGER MAULWÜRFE</p>
        </h2>
      )}
      <p className="mb-4">
        Our team is comprised of a dynamic group of players, coaches, and
        support staff who are passionate about volleyball. Whether it&apos;s
        spiking, blocking, or strategizing, each member brings their unique
        skills and energy to the court. Meet our amazing team and get to know
        the individuals who make every game a thrilling experience. Stay tuned
        for updates on our upcoming matches and events!
      </p>
      {!showAllTeam ? (
        <Slider {...sliderSettings} className="mb-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} teamMember={member} />
          ))}
        </Slider>
      ) : (
        <div className="flex flex-wrap gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} teamMember={member} />
          ))}
        </div>
      )}
      {!showAllTeam && (
        <Link to="/team">
          <button className="block btn-primary-2 mx-auto">Show all Team</button>
        </Link>
      )}
    </section>
  );
};

Team.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Team;
